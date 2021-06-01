const Discord = require('discord.js');

module.exports = {
    category: 'Guild',
    description: 'Shows Waiting List for Jekkai',
    
    callback: ({ message }) => {
        const recruits = new Discord.MessageEmbed()
            .setTitle("Jekkai Waiting List")
            .setDescription(`${message.guild.roles.cache.get('831223336796684338').members.map(m => m.user.tag).join("\n")} 
            \n **Count** 
            ${message.guild.roles.cache.get('831223336796684338').members.size}`)

        message.channel.send(recruits)    
    }
}