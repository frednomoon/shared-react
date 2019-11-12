const req = require("./*.js")

Object.keys(req).forEach(key => {
  if (key !== "index") module.exports[key] = req[key].default
})
