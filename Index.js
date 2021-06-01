const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION']
});    
const process = require('process');
const WOKCommands = require('wokcommands')

const {
    token,  
    MONGO_URI,
} = require(`./Config.json`);

client.once('ready', () => {
    console.log('Bot Start!!!');
    client.user.setUsername("Ten Commandments");
    client.user.setActivity(`Watching for tHelp`)
    
    new WOKCommands(client, {
        commandsDir:'Commands',
        featuresDir:'Features'
    })
    
    .setMongoPath(MONGO_URI)
    .setDefaultPrefix('t')
    .setCategorySettings([
    {
        name: 'Fun & Games',
        emoji: '🎮'
    },
    {
        name: 'Test',
        emoji: '⚠️'
    },
    {
        name: 'Guild',
        emoji: '📜'
    }])
})

if (process.pid) {
    console.log('This process is your pid ' + process.pid);
}

client.login(token);
