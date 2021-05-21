module.exports = {
  images: {
    domains: ["rappler.com", "assets2.rappler.com", "i.ytimg.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
