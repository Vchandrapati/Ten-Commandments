const Discord = require('discord.js');

module.exports = {
    category: 'Guild',
    description: 'Shows Eternal Members',
    
    callback: ({ message }) => {
        const recruits = new Discord.MessageEmbed()
            .setTitle("Eternal Members")
            .setDescription(`**Captain** 
            ${message.guild.roles.cache.get('853614529815642122').members.map(m => m.user.username)} 
            \n **Vice Captains** 
            ${message.guild.roles.cache.get('863149696674431006').members.map(m => m.user.username).join("\n")}
            \n **Members** 
            ${message.guild.roles.cache.get('863148439319478304').members.map(m => m.user.username).join("\n")}
            \n **Count** 
            ${message.guild.roles.cache.get('863148439319478304').members.size}/30`)

        message.channel.send(recruits)      
    }
}