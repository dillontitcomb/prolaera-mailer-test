"use strict";

var _index = require("@prolaera/prolaeraemailtemplates/src/index.js");

console.log("Hello!");
console.log(_index.engine);

function doThing(something) {
  (0, _index.engine)(something);
}