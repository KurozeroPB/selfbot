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
		this.send(msg, `Stopped bumping`);
		return;
	}
	index = 0;
	this.send(msg, `Started bumping`);
	interval = setInterval(() => {
		this.log.log(`${bump[index]}`, 'tbump');
		this.send(msg, `${bump[index]}`);
		index++;
		if(index >= bump.length){
			index = 0;
		}
	}, 1860000);
  });
}
