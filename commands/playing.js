/*
  Play. Edit your playing game name. Leave blank to clear game.
  Dont forget that when you edit your game with a selfbot you wont be able to see it, but other people will.
*/
module.exports = (self) => {
  self.registerCommand('playing', function (msg, args) {
    this.self.editStatus(this.config.defaultStatus.toLowerCase(), args ? {name: args.join(' ')} : null)
    this.send(msg, '👌')
  })
}
