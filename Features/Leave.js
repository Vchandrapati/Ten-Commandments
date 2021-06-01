const Discord = require('discord.js')
const path = require('path')

module.exports = (client, instance) => {
    client.on("guildMemberRemove", async (member) => {
        const { guild } = member

        const channel = guild.channels.cache.get("715827909486444586")

        const bye = new Discord.MessageEmbed()
            .setTitle(`Bye ${member.user.username} we wont miss you`)
            .setImage('https://i.imgur.com/0wB81HA.gif')

        channel.send(bye)

    }
)}

module.exports.config = {
    displayName: 'LEAVE Message',
    dbName: 'LEAVE MESSAGE',
    loadDBFirst: true
}
