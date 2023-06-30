import withMarkdoc from "@markdoc/next.js";
import { withNx } from "@nx/next";
import withSearch from "./src/markdoc/search.mjs";

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md"],
  experimental: {
    scrollRestoration: true,
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

export default withNx(withSearch(withMarkdoc({ schemaPath: "./src/markdoc" })(nextConfig)));
