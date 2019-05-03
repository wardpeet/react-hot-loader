// remove fetch from the global namespace as it could been polyfilled in node world.
// Source-map packages does a global.fetch check to fallback to browser wasm support.
// This is fixed in version 0.8.0-beta but for now we need this patch.
module.exports = (() => {
  const originalFetch = global.fetch
  delete global.fetch
  const sourceMap = require('source-map')
  global.fetch = originalFetch

  return sourceMap
})()
