const aesthetics = require('aesthetics');

module.exports = (self) => {
  self.registerCommand('aesthetic', function(msg, args) {
    const str = args.toString();
    const conv = aesthetics(str);
    this.self.createMessage(msg.channel.id, {
      content: ``,
      embed: {
        color: 0x00BFFF,
        author: {
          name: ``,
          icon_url: ``
        },
        description: `${conv}`,
      }
    })
  }, {
    aliases: ['aes']
  })
}
