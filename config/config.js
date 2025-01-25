module.exports = {
  server: {
    port: {
      doc: "The port to bind",
      format: "port",
      default: 3000,
      env: "DEVICE_PORT",
      arg: "port",
    },
    url: {
      doc: "Gingersnap URL",
      format: String,
      default: "https://animated-gingersnap-8cf7f2.netlify.app/",
      env: "GINGERSNAP_URL",
    },
    password: {
      doc: "Gingersnap Password",
      format: String,
      default: "",
      env: "GINGERSNAP_PASSWORD",
    },
    username: {
      doc: "Ginersnap Username",
      format: String,
      default: "",
      env: "GINGERSNAP_USERNAME",
    },
  },
};
