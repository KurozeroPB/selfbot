/*
  Prune. Deletes messages sent by you from a channel.
*/
module.exports = (self) => {
  self.registerCommand('prune', function (msg, args) {

    if (!args[0] || !/\d{1,2}/ig.test(args[0])) return this.self.createMessage(msg.channel.id, 'Please specify the number of messages to delete.')
    msg.channel.getMessages(200).then(msgs => {
      let msgArray = msgs.filter(m => m.author.id === this.self.user.id)
      msgArray.length = parseInt(args[0], 10) + 1
      msgArray.map(m => m.delete().catch(err => this.log.err(err)))
    })
  })
}
