export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611dfdd93fae4b94113da2f2",
                  title: "Sanity Studio",
                  name: "insanityvc-studio",
                  apiId: "4a61338e-96e0-46c2-9b9d-ed4ad67bd4b0",
                },
                {
                  buildHookId: "611dfdd9311aafd0ef4e5d5d",
                  title: "Blog Website",
                  name: "insanityvc",
                  apiId: "2443acdc-4d6e-4de8-b2c7-0386e134d6ba",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/elykahn/InSanityvc",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://insanityvc.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
