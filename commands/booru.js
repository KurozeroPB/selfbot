/*
Send possibly nsfw image with the given tag(s), pls use this only in channels where nsfw is allowed!
*/
const booru = require('booru')

//image.common.file_url
module.exports = (self) => {
  self.registerCommand('booru', function (msg, args) {

    var str = args + "";
    var array = str.split(','),
        a=array[0], b=array[1], c=array[2];
    if(a === 'list') {
      this.self.createMessage(msg.channel.id, { content: ``,
        embed: {
          color: 0x00BFFF,
          author: {
            name: `${msg.author.username}`,
            icon_url: `${msg.author.avatarURL}`
          },
          description: `e621.net, aliases: ["e6","e621"]
e926.net, aliases: ["e9","e926"]
hypnohub.net, aliases: ["hh","hypo","hypohub"]
danbooru.donmai.us, aliases: ["db","dan","danbooru"]
konachan.com, aliases: ["kc","konac","kcom"]
konachan.net, aliases: ["kn","konan","knet"]
yande.re, aliases: ["yd","yand","yandere"]
gelbooru.com, aliases: ["gb","gel","gelbooru"]
rule34.xxx, aliases: ["r34","rule34"]
safebooru.org, aliases: ["sb","safe","safebooru"]
tbib.org, aliases: ["tb", "tbib","big"]
xbooru.com, aliases: ["xb","xbooru"]
youhate.us, aliases: ["yh","you","youhate"]
dollbooru.org, aliases: ["do","doll","dollbooru"]
rule34.paheal.net, aliases: ["pa","paheal"]
lolibooru.moe, aliases: ["lb", "lol", "loli", "lolibooru"]`,
          footer: {
            text: `${msg.channel.guild ? (`${msg.channel.guild.name} : #${msg.channel.name}`) : ""}`,
            icon_url: `${msg.channel.guild ? msg.channel.guild.iconURL : ""}`
          }
        }
      })
    }
    else{
      if(!c) {
        booru.search(`${a}`, [`${b}`], {limit: 1, random: true})
        .then(booru.commonfy)
        .then(images => {
          for (let image of images) {
            var tag = image.common.tags + "";
            var tags = tag.split(',').join(', ');
            this.self.createMessage(msg.channel.id, { content: ``,
              embed: {
                color: 0x00BFFF,
                author: {
                  name: `${msg.author.username}`,
                  url: `${image.common.file_url}`,
                  icon_url: `${msg.author.avatarURL}`
                },
                description: `[Click here for the direct image url](${image.common.file_url})
Searched tags: ${b}
Tags: ${tags}
Score: ${image.common.score}
Rating: ${image.common.rating}`,
                image: {
                    url: `${image.common.file_url}`
                },
                footer: {
                  text: `${msg.channel.guild ? (`${msg.channel.guild.name} : #${msg.channel.name}`) : ""}`,
                  icon_url: `${msg.channel.guild ? msg.channel.guild.iconURL : ""}`
                }
              }
            })
          }
        })
        .catch(err => {
          if (err.name === 'booruError') {
            console.log(err.message)
          } else {
            console.log(err)
          }
        })
      }
      else {
        booru.search(`${a}`, [`${b}`, `${c}`], {limit: 1, random: true})
        .then(booru.commonfy)
        .then(images => {
          for (let image of images) {
            var tag = image.common.tags + "";
            var tags = tag.split(',').join(', ');
            this.self.createMessage(msg.channel.id, { content: ``,
              embed: {
                color: 0x00BFFF,
                author: {
                  name: `${msg.author.username}`,
                  url: `${image.common.file_url}`,
                  icon_url: `${msg.author.avatarURL}`
                },
                description: `[Click here for the direct image url](${image.common.file_url})
Searched tags: ${b}, ${c}
Tags: ${tags}
Score: ${image.common.score}
Rating: ${image.common.rating}`,
                image: {
                    url: `${image.common.file_url}`
                },
                footer: {
                  text: `${msg.channel.guild ? (`${msg.channel.guild.name} : #${msg.channel.name}`) : ""}`,
                  icon_url: `${msg.channel.guild ? msg.channel.guild.iconURL : ""}`
                }
              }
            })
          }
        })
        .catch(err => {
          if (err.name === 'booruError') {
            console.log(err.message)
          } else {
            console.log(err)
          }
        })
      }
    }
  }, {
    noPms: false,
    aliases: ['nsfw', 'hentai', 'porn'],
    perms: [],
    deleteAfter: false
  })
}
