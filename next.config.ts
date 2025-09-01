module.exports = {
  images: {
    domains: [
      "www.notion.so",
      "secure.notion-static.com",
      "prod-files-secure-us-west-2.notion-static.com",
      "images.unsplash.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "s3.us-west-2.amazonaws.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "**.s3.amazonaws.com" },
      { protocol: "https", hostname: "**.s3.us-west-2.amazonaws.com" },
      { protocol: "https", hostname: "**.notion-static.com" },
    ],
  },
};
