const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "$";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`${client.users.size} Users`)
});
client.on('ready', () => {
    client.user.setActivity("You",{type: 'WATCHING'})

});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
=========================[ ${member} ]=========================


                                                     اقدم لك افضل سيرفر ديسكورد و بيه بوتات نااااار :fire:

                                                  تعال و جرب بـ نفسك يا قلبي سيرفر مرا خرافي :heart: :fire:

                                        لا تنسي تنشر السيرفر يا قلبي عشان بيه جيف اواي كتير بالطريق :heart: :fire:

                                                                                     السيرفر


=======================[ https://discord.gg/K5zBSfH ]=========================
**`)
}).catch(console.error)
})

const discord = require('discord.js');
const a7med = new Discord.Client();

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
=========================[ ${member} ]=========================


                                                     اقدم لك افضل سيرفر ديسكورد و بيه بوتات نااااار :fire:

                                                  تعال و جرب بـ نفسك يا قلبي سيرفر مرا خرافي :heart: :fire:

                                        لا تنسي تنشر السيرفر يا قلبي عشان بيه جيف اواي كتير بالطريق :heart: :fire:

                                                                                     السيرفر


=======================[ https://discord.gg/K5zBSfH ]=========================
**`)
}).catch(console.error)
});

client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('.bc')) {
 if (message.author.id !== '474276191117770753') return message.reply('**Not For You !**')
 if(!message.author.id === '474276191117770753') return;
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "LegendryBot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('.bcall')){
 if (message.author.id !== '474276191117770753') return message.reply('**Not For You !**')
 if(!message.author.id === '474276191117770753') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.login(process.env.BOT_TOKEN);
