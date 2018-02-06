const dict = {}
const req = require.context('./status/', false, /\.yaml/)
const regexp = /\.\/(\d+)\.yaml$/
req.keys().forEach(file => {
  const [, code] = regexp.exec(file)
  dict[code] = req(file)
})

function query(code, locale = 'en') {
  const message = dict[code]
  if (!message) return -1

  return message[locale] || -2
}

module.exports = {
  dict,
  query
}
