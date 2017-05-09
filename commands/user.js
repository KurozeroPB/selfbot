/*
Send user info.
*/
moment = require('../node_modules/moment');

module.exports = (self) => {
  self.registerCommand('user', function(msg, args) {
    let user = this.findMember(msg, args[0])
    if (!user) return this.self.createMessage(msg.channel.id, 'That is not a valid guild member. Need to specify a name, an ID or mention the user.')
    var id = msg.channel.guild.members.get(user.id);
    this.self.createMessage(msg.channel.id, {
      content: ``,
      embed: {
        color: 0x00BFFF,
        type: 'rich',
        author: {
          name: `Info of: ${user.username}`,
          icon_url: `${user.avatarURL}`
        },
        description: `Playing: ${id.game === null ? `n/a` : ''}${id.game !== null ? '**'+id.game.name+'**' : ''}`,
        thumbnail: {
          url: `${user.avatarURL}`
        },
        fields: [{
            name: `Username:`,
            value: `${user.username}#${user.discriminator}`,
            inline: true
          },
          {
            name: `Bot:`,
            value: `${user.bot}`,
            inline: true
          },
          {
            name: `User ID:`,
            value: `${user.id}`,
            inline: true
          },
          {
            name: `Nickname:`,
            value: `${id.nick === null ? `n/a` : ''}${id.nick !== null ? id.nick : ''}`,
            inline: true
          },
          {
            name: `Created at:`,
            value: `${user.createdAt === null ? `` : ''}${moment(user.createdAt).utc().format('ddd MMM DD YYYY | kk:mm:ss')} UTC (${moment(user.createdAt).fromNow()})`,
            inline: false
          },
          {
            name: `Joined at:`,
            value: `${id.joinedAt === null ? `` : ''}${moment(id.joinedAt).utc().format('ddd MMM DD YYYY | kk:mm:ss')} UTC (${moment(id.joinedAt).fromNow()})`,
            inline: false
          },
          {
            name: `Status`,
            value: `${id.status}`,
            inline: false
          },
          {
            name: `Roles`,
            value: `${id.roles.map(r=>msg.channel.guild.roles.get(r).name).join(', ')}`,
            inline: false
          }
        ]
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
