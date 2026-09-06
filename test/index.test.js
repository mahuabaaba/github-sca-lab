const test = require("node:test");
const assert = require("node:assert/strict");
const { formatProjectName } = require("../src/index");

test("formats a project name", () => {
  assert.equal(formatProjectName("oss-funder github lab"), "Oss Funder Github Lab");
});
