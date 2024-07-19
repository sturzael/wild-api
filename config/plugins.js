module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_lZc69jFp381lGp3F3JhUaZM9nUPq/rXoXjrQsGB",
      apiToken: "##canceled",
      appFilter: "wild-api",
      teamFilter: "team_iXsy6sqoarYXVk11tJu3Mf9n",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
