/*
  Emoji. Add emojis from URL's, remove or list emojis from the current guild. (Needs "Manage Emojis" permisssion)
  "emoji add emoji_name IMAGE_URL"
  "emoji remove emoji"
  "emoji list"
*/
const request = require('superagent')

module.exports = (self) => {
  self.registerCommand('emoji', function (msg, args) {
    if (!args[0]) return this.self.createMessage(msg.channel.id, 'What do you want to do? `add`, `remove`, or `list` emojis?')

    if (args[0] === 'add') {
      if (!args[1] || !args[2]) return this.self.createMessage(msg.channel.id, 'Specify a name and a image url for the new emoji.')
      request.get(args[2])
      .end((err, res) => {
        if (err) { this.log.err(err, 'Emoji'); return this.self.createMessage(msg.channel.id, 'There was an error.') }
        if (res.body && res.statusCode === 200) {
          const buf = res.body
          const type = buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF ? 'data:image/jpeg;base64,' : 'data:image/png;base64,'
          this.self.createGuildEmoji(msg.channel.guild.id, { name: args[1], image: `${type}${res.body.toString('base64')}` })
          .then(e => this.self.createMessage(msg.channel.id, `**Guild Emoji created!**\nName: \`:${e.name}:\``))
          .catch(err => { this.log.err(err, 'Emoji'); this.self.createMessage(msg.channel.id, 'There was an error.') })
        }
      })

    } else if (args[0] === 'remove') {
      if (!args[1]) return this.self.createMessage(msg.channel.id, 'No emoji specified.')
      if (msg.channel.guild.emojis.length > 0) {
        this.self.deleteGuildEmoji(msg.channel.guild.id, /<:\w+:(\d+)>/.exec(args[1])[1])
        .then(() => this.self.createMessage(msg.channel.id, `**Guild Emoji Deleted!**\nWas: \`${args[1]}\``))
        .catch(err => { this.log.err(err, 'Emoji'); this.self.createMessage(msg.channel.id, 'There was an error.') })
      } else return this.self.createMessage(msg.channel.id, 'This guild has no custom Emojis.')

    } else if (args[0] === 'list') {
      if (msg.channel.guild.emojis.length > 0) {
        this.self.createMessage(msg.channel.id, `**Emojis:** ${msg.channel.guild.emojis.map(e => `\`:${e.name}:\``).join(', ')}`)
      } else return this.self.createMessage(msg.channel.id, 'This guild has no custom Emojis.')
    }
  }, {
    perm: ['manageEmojis'],
    noPms: true
  })
}
