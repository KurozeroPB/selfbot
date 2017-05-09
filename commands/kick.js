/*
  Kick. Kicks a user from a guild. Can input a mention, ID or name. (Needs "Kick Members" permisssion)
*/
module.exports = (self) => {
  self.registerCommand('kick', function (msg, args) {
    if (!args[0]) return this.self.createMessage(msg.channel.id, 'Need to specify a name, an ID or mention the user.')
    let user = this.findMember(msg, args[0])
    if (!user) return this.self.createMessage(msg.channel.id, 'That is not a valid guild member. Need to specify a name, an ID or mention the user.')
    msg.channel.guild.kickMember(user.id)
    .then(() => this.self.createMessage(msg.channel.id, '👌'))
    .catch((err) => { this.log.err(err, 'Kick'); this.self.createMessage(msg.channel.id, `Could not kick ${user.username}`) })
  }, {
    perms: ['kickMembers'],
    noPms: true
  })
}
