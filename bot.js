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


client.login(process.env.BOT_TOKEN);
