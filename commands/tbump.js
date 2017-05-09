/*
  tbumb. bumps
*/

var bump = ["$bump", "=bump", "dbump", "dlm!bump", "$bump", "!bump", "!!bump", "", "$bump", "=bump", "dbump", "", "$bump", "!bump", "!!bump", "dlm!bump", "$bump", "=bump", "dbump", "", "$bump", "!bump", "!!bump", ""];
var index = 0;
var interval;

module.exports = (self) => {
  self.registerCommand('tbump', function (msg, args) {
	if(interval){
		clearInterval(interval);
		interval = null;
		this.self.createMessage(msg.channel.id, `Stopped bumping`);
		return;
	}
	index = 0;
	this.self.createMessage(msg.channel.id, `Started bumping`);
	interval = setInterval(() => {
		this.log.log(`${bump[index]}`, 'tbump');
		this.self.createMessage(msg.channel.id, `${bump[index]}`);
		index++;
		if(index >= bump.length){
			index = 0;
		}
	}, 1860000);
  });
}
