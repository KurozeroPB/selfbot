module.exports = (self) => {
  self.registerCommand('mem', function(msg, args) {
    let memUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0);
    this.self.createMessage(msg.channel.id, {
      content: ``,
      embed: {
        color: 0x00BFFF,
        author: {
          name: `${msg.author.username}`,
          icon_url: `${msg.author.avatarURL}`
        },
        description: `Memory usage is at \`${memUsage}mb\``
      }
    })
  })
}
