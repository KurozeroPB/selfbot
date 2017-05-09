/*
  Eval. Evaluates a snippet of javascript code.
*/
const util = require('util')

module.exports = (self) => {
  self.registerCommand('eval', function(msg, args) {
    // If msg author is not the owner
    if (msg.author.id !== this.self.user.id) return

    // Delete the msg, create a new one, and then eval
    this.send(msg, 'Evaluating...').then(m => {
      let evaled = ''
      try {
        evaled = eval(args.join(' ')) // eslint-disable-line no-eval
        if (Array.isArray(evaled) || typeof evaled === 'object') {
          evaled = util.inspect(evaled)
        }
      } catch (err) {
        this.log.err(err, 'Eval')
        return this.send(m, 'There was an error! Check console.')
      }
      this.self.createMessage(msg.channel.id, {
        content: ``,
        embed: {
          color: 0x00BFFF,
          author: {
            name: ``,
            icon_url: ``
          },
          description: `Input:
\`\`\`js
${args.join(' ')}
\`\`\`

Output:
\`\`\`js
${typeof (evaled) === 'string' ? evaled.replace(/`/g, '`' + String.fromCharCode(8203)) : evaled}
\`\`\``
        }
      });
    })
  })
}
