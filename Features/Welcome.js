const Canvas = require('canvas')
const Discord = require('discord.js')
const path = require('path')

module.exports = (client, instance) => {
    client.on("guildMemberAdd", async (member) => {
        const { guild } = member

        const channel = guild.channels.cache.get("715827909486444586")
        
        const canvas = Canvas.createCanvas(914, 514)
        const ctx = canvas.getContext('2d')

        const background = await Canvas.loadImage('./Banner.jpg')

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = '60px courgette';
        ctx.fillStyle = '#FFFFFF';

        const text = `Welcome ${member.user.tag}`
        const center = ctx.measureText(text).width

        ctx.fillText(text, (canvas.width/2) - (center / 2), canvas.height / 2 + 150);

        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2 - 50, 120, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', dynamic: true}));
        ctx.drawImage(avatar, canvas.width / 2 - 120, canvas.height / 2 - 170, 240, 240);

        let x, y = 0;
        ctx.drawImage(background, x, y)

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Welcome-Image.png')
        channel.send(`Greetings ${member} Welcome to ${guild.name}! Please check out the <#838013564152446976> if you are looking for a guild or head over to <#837988405957885952> to give yourself access to more of the server! Follow the rules and enjoy your stay!`, attachment)

    }
)}

module.exports.config = {
    displayName: 'Welcome Message',
    dbName: 'WELCOME MESSAGE',
    loadDBFirst: true
}
