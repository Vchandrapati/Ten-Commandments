module.exports = {
    category: 'Test',
    description: 'Simulates Leaving',    
    requiredPermissions: ['ADMINISTRATOR'],
    
    callback: ({ message, args, text, client }) => {
      client.emit('guildMemberRemove', message.member)
    },
}