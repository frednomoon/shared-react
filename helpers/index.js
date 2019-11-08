const req = require("./*.js")

Object.keys(req).forEach(key => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, "$1")
  module.exports[componentName] = req[key].default
})
