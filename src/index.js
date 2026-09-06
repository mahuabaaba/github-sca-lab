const lodash = require("lodash");

function formatProjectName(name) {
  return lodash.startCase(name);
}

module.exports = { formatProjectName };
