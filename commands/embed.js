/*
Send embed message.
*/

module.exports = (self) => {
  self.registerCommand('embed', function (msg, messageArray) {

    this.self.createMessage(msg.channel.id, { content: ``,
      embed: {
        color: 0x00BFFF,
        author: {
          name: `${msg.author.username}#${msg.author.discriminator}`,
          icon_url: `${msg.author.avatarURL}`
        },
        description: `${messageArray.join(" ")}`
      }
    })
  }, {
    noPms: false,
    aliases: [],
    perms: [

    ],
    deleteAfter: false
  })
}
