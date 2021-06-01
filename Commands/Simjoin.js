module.exports = {
    category: 'Test',
    description: 'Simulates Join',    
    requiredPermissions: ['ADMINISTRATOR'],
    
    callback: ({ message, args, text, client }) => {
      client.emit('guildMemberAdd', message.member)
    },
}