import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import worker from "../dist/server/index.js";

const routes = ["/", "/skills", "/skills/videography", "/skills/storytelling", "/skills/copywriting", "/skills/content-strategy", "/skills/ai-visual-production"];
const rendered = new Map();
async function render(path) {
  if (!rendered.has(path)) {
    const response = await worker.fetch(new Request(`http://localhost${path}`), {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    }, { waitUntil() {}, passThroughOnException() {} });
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") ?? "", /text\/html/);
    rendered.set(path, await response.text());
  }
  return rendered.get(path);
}
for (const route of routes) {
  test(`renders ${route} with valid local images and navigation`, async () => {
    const html = await render(route);
    assert.match(html, /Abdallah Al-Mohandes/);
    assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
    assert.match(html, /<main/);
    for (const [, src] of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
      if (src.startsWith("/")) await access(new URL(`../public${src}`, import.meta.url));
    }
    for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const url = new URL(href, `http://localhost${route}`);
      assert.ok(routes.includes(url.pathname), `Unknown route: ${href}`);
      if (url.hash) assert.ok((await render(url.pathname)).includes(`id="${url.hash.slice(1)}"`), `Missing anchor: ${href}`);
    }
  });
}
test("filming gallery excludes the four AI reels and retains five CyberScale samples", async () => {
  const html = await render("/skills/videography");
  const links = [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map(x => x[1]);
  for (const id of ["DZzhMoHx-MU", "DZmgnKsxn9W", "DZfH27lxtCC", "DZQIxU6RzFN"]) assert.ok(!links.some(link => link.includes(id)));
  assert.equal(links.filter(link => link.includes("cyberscale.agency/reel/")).length, 5);
});
