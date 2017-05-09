module.exports = (self) => {
  self.registerCommand('8ball', function(msg, args) {
    let Answers = ["No", "Yes", "Of Course", "Of course not", "Most likely"];
    this.self.createMessage(msg.channel.id, {
      content: ``,
      embed: {
        color: 0x00BFFF,
        author: {
          name: `${msg.author.username}`,
          icon_url: msg.author.avatarURL
        },
        fields: [{
          name: "8ball",
          value: `**Question:** ${args.join(" ")}\n**Answer:** ${Answers[Math.floor(Math.random() * Answers.length)]}`
        }]
      }
    })
  })
}
