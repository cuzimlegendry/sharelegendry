const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = ".";
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
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "LegendryBot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))


client.login(process.env.BOT_TOKEN);
