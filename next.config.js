const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: "serverless",
  assetPrefix: isProd
    ? "https://us-central1-rapplerinternal.cloudfunctions.net/dailywrap-v2-dev"
    : "",
  images: {
    domains: ["rappler.com", "assets2.rappler.com", "i.ytimg.com"],
  },
};
