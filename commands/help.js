/*
  Help. Shows all command names in console.
*/
module.exports = (self) => {
  self.registerCommand('help', function (msg, args) {
    this.log.log(`Bot commands:\n${Object.keys(self.commands.main).join('\n')}`, 'Help')
    return this.self.createMessage(msg.channel.id, 'Check console.')
  }, {
    aliases: ['h']
  })
}
