const Discord = require('discord.js');

module.exports = {
    category: 'Guild',
    description: 'Shows Bloodhawks Members',
    
    callback: ({ message }) => {
        const recruits = new Discord.MessageEmbed()
            .setTitle("Bloodhawks Members")
            .setDescription(`**Captain** 
            ${message.guild.roles.cache.get('859699187214319627').members.map(m => m.user.username)} 
            \n **Vice Captains** 
            ${message.guild.roles.cache.get('859698637608452116').members.map(m => m.user.username).join("\n")}
            \n **Members** 
            ${message.guild.roles.cache.get('859689079662968843').members.map(m => m.user.username).join("\n")}
            \n **Count** 
            ${message.guild.roles.cache.get('859689079662968843').members.size}/30`)

        message.channel.send(recruits)      
    }
}