import { nodes as defaultNodes } from "@markdoc/markdoc";

import { Fence } from "@syntax/components/Fence";

const nodes = {
  document: {
    render: undefined,
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: "col",
      },
    },
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
};

export default nodes;
