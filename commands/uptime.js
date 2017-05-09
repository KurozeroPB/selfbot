module.exports = (self) => {
  self.registerCommand('uptime', function(msg, args) {
    this.self.createMessage(msg.channel.id, {
      content: ``,
      embed: {
        color: 0x00BFFF,
        author: {
          name: `Uptime:`,
          icon_url: ``
        },
        description: `:clock1: ${this.formatTime(self.uptime)}`
      }
    });
  })
}
