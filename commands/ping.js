/*
  Ping. Edits the message to "Pong!" to check if the bot is online.
*/

module.exports = (self) => {
  self.registerCommand('ping', function(msg, args) {
    this.self.createMessage(msg.channel.id, {
      content: ``,
      embed: {
        color: 0x00BFFF,
        author: {
          name: `${msg.author.username}#${msg.author.discriminator}`,
          icon_url: `${msg.author.avatarURL}`
        },
        description: `Pong!`
      }
    }).then(m => this.edit(m, {
      embed: {
        color: 0x00BFFF,
        author: {
          name: `${msg.author.username}#${msg.author.discriminator}`,
          icon_url: `${msg.author.avatarURL}`
        },
        description: `Pong! (${m.timestamp - msg.timestamp}ms)`
      }
    }))
  })
}
