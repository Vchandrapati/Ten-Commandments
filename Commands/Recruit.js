const Discord = require('discord.js');

module.exports = {
    category: 'Guild',
    description: 'Shows Recruits',
    
    callback: ({ message }) => {
        const recruits = new Discord.MessageEmbed()
            .setTitle("Recruits")
            .setDescription(`**Jekkai Recruits**
            ${message.guild.roles.cache.get('838030853849743370').members.map(m => m.user.tag).join("\n")}
            \n **Kenjaitamu**
            ${message.guild.roles.cache.get('838030995964952587').members.map(m => m.user.tag).join("\n")}
            \n **Dong**
            ${message.guild.roles.cache.get('838031257627525130').members.map(m => m.user.tag).join("\n")}`)

        message.channel.send(recruits)      
    }
}