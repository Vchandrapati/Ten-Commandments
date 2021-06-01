const Discord = require('discord.js');

module.exports = {
    category: 'Guild',
    description: 'Shows Jekkai Members',
    
    callback: ({ message }) => {
        const recruits = new Discord.MessageEmbed()
            .setTitle("Kentjaimu Members")
            .setDescription(`**Captain** 
            ${message.guild.roles.cache.get('818746366968332298').members.map(m => m.user.username)} 
            \n **Members** 
            ${message.guild.roles.cache.get('818743892841070602').members.map(m => m.user.username).join("\n")}
            \n **Count** 
            ${message.guild.roles.cache.get('715903134710366250').members.size}/30`)

        message.channel.send(recruits)           
    }
}