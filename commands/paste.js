/*
  Pastes a copypasta from /config/paste.json.
  Usage: [prefix]paste <name of pasta>
*/
const paste = require('../config/paste.json')

module.exports = (self) => {
  self.registerCommand('paste', function (msg, args) {
    if (!args[0]) return this.send(msg, 'Be more specific..')
    if (Object.keys(paste).includes(args[0].toLowerCase())) {
      let reply = paste[args[0].toLowerCase()]
      if (Array.isArray(reply)) {
        reply = reply[~~(Math.random() * reply.length)]
      }
      this.self.createMessage(msg.channel.id, reply)
    } else return this.send(msg, 'Not found.')
  })
}
