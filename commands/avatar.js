/*
Send avatar.
*/

module.exports = (self) => {
  self.registerCommand('avatar', function (msg, args) {
    let user = this.findMember(msg, args[0])
    if (!user) return this.send(msg, 'That is not a valid guild member. Need to specify a name, an ID or mention the user.')
    this.send(msg, { content: ``,
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
