export default {
  site: "http://localhost:8000/",
  ci: {
    budget: 85,
    buildStatic: true,
  },
  scanner: {
    skipJavascript: true,
    samples: 3,
    device: "desktop",
  },
  puppeteerClusterOptions: {
    maxConcurrency: 1,
  },
  lighthouseOptions: {
    skipAudits: ["is-on-https"],
  },
};
