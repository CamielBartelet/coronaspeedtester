module.exports = {
  // env: {
  //   GOOGLE_CLIENT_IDEFF:
  //     "1042464211805-09fv7ess4b9qarsdi55qnpcck3ikjniv.apps.googleusercontent.com",
  // },
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
    EVENTGOOSE_API_KEY: process.env.EVENTGOOSE_API_KEY,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
        net: "empty",
      };
    }

    return config;
  },
};
