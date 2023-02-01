import { PrerenderConfig } from "@stencil/core";

const config: PrerenderConfig = {
  filterAnchor(attrs) {
    // don't prerender link to blog
    return !attrs.href.endsWith("/blog");
  },
};

module.exports = config;
