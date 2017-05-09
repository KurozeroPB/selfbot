/*
Send avatar.
*/

module.exports = (self) => {
  self.registerCommand('avatar', function(msg, args) {
    let user = this.findMember(msg, args[0])
    if (!user) return this.self.createMessage(msg.channel.id, 'That is not a valid guild member. Need to specify a name, an ID or mention the user.')
    this.self.createMessage(msg.channel.id, {
      content: ``,
      embed: {
        color: 0x00BFFF,
        author: {
          name: `${user.username}'s avatar`,
          url: `${user.avatarURL}`,
          icon_url: ``
        },
        description: `**URL: ${user.avatarURL}**`,
        image: {
          url: `${user.avatarURL}`
        }
      }
    })
  }, {
    noPms: false,
    aliases: ['ava', 'pfp', 'avi'],
    perms: [],
    deleteAfter: false
  })
}
