const Discord = require('discord.js');

module.exports = {
    category: 'Guild',
    description: 'Shows Jekkai Members',
    
    callback: ({ message }) => {
        
        const recruits = new Discord.MessageEmbed()
            .setTitle("Dong Members")
            .setDescription(`**Captain** 
            ${message.guild.roles.cache.get('820150609138941973').members.map(m => m.user.username)} 
            \n **Members** 
            ${message.guild.roles.cache.get('818747029709783040').members.map(m => m.user.username).join("\n")}
            \n **Count** 
            ${message.guild.roles.cache.get('715903134710366250').members.size}/30`)

        message.channel.send(recruits)     
    }
}