//@ts-check

import nextMDX from "@next/mdx";
import { composePlugins, withNx } from "@nx/next";
import { recmaPlugins } from "./src/mdx/recma.mjs";
import { rehypePlugins } from "./src/mdx/rehype.mjs";
import { remarkPlugins } from "./src/mdx/remark.mjs";
import withSearch from "./src/mdx/search.mjs";

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    scrollRestoration: true,
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: "@mdx-js/react",
  },
});

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withSearch,
  withMDX,
];

export default composePlugins(...plugins)(nextConfig);
