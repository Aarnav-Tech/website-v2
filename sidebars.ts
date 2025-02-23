import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  guides: [
    "index",
    {
      type: "category",
      label: "My Lame Python Projects!",
      link: {
        type: "generated-index",
        title: "Python Projects",
        description: "Me Projects :3.",
      },
      items: [
        "tutorial-basic/qgp",
        "tutorial-basic/lggp",
      ],
    },
    {
      type: "category",
      label: "My Other Compiled builds!",
      link: {
        type: "generated-index",
        description: "Me Other Projects :3.",
      },
      items: [
        "other-comps/zed",
        "other-comps/winutils",
        "other-comps/1compinfo",
      ],
    },
    {
      type: "category",
      label: "Science Notes",
      link: {
        type: "generated-index",
        description: "Science Notes",
      },
      items: [
        "sci/bio",
        "sci/phy",
        "sci/chem",
      ],
    },
  ],
};

export default sidebars;
