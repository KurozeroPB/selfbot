module.exports = (self) => {
  self.registerCommand('nitro', function(msg, args) {
    this.self.createMessage(msg.channel.id, {
      content: ``,
      embed: {
        color: 5267072,
        author: {
          name: `Discord Nitro Message`,
          icon_url: `https://cdn.discordapp.com/emojis/264287569687216129.png`
        },
        description: `[Discord Nitro](https://discordapp.com/nitro) is **required** to view this message.`,
        thumbnail: {
          url: `https://cdn.discordapp.com/attachments/194167041685454848/272617748876492800/be14b7a8e0090fbb48135450ff17a62f.png`
        }
      }
    })
  })
}
