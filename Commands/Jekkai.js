const Discord = require('discord.js');

module.exports = {
    category: 'Guild',
    description: 'Shows Jekkai Members',
    
    callback: ({ message }) => {
        const recruits = new Discord.MessageEmbed()
            .setTitle("Jekkai Members")
            .setDescription(`**Captain** 
            ${message.guild.roles.cache.get('840533130615980062').members.map(m => m.user.username)} 
            \n **Vice Captains** 
            ${message.guild.roles.cache.get('799069679439314944').members.map(m => m.user.username).join("\n")}
            \n **Members** 
            ${message.guild.roles.cache.get('715903134710366250').members.map(m => m.user.username).join("\n")}
            \n **Count** 
            ${message.guild.roles.cache.get('715903134710366250').members.size}/30`)

        message.channel.send(recruits)      
    }
}