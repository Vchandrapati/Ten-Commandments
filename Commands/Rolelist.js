const Discord = require('discord.js');

module.exports = {
    category: 'Guild',
    description: 'Shows Members With a Certain role',
    
    callback: ({ message }) => {
        
        const msg = message.content.replace("@", "").replace("&", "").replace("<", "").replace(">", "")
        const args = msg.split(" ")
        const Role = message.guild.roles.cache.find(role => role.id == args.slice(1).join(' '));

        const recruits = new Discord.MessageEmbed()
            .setTitle(`${Role.name}`)
            .setDescription(`**Members** 
            ${message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.username).join("\n")}`)

        message.channel.send(recruits)       
    }
}