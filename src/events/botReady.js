const Event = require('../structures/interaction/event')

module.exports = new Event({
  name: 'ready',
  async callback (client) {
    await client.user.setPresence({ activities: [{ name: '/setup', type: 'WATCHING' }], status: 'dnd' })

    const devGuild = await client.guilds.cache.get(process.env.GUILD)
    await devGuild.commands.set(client.commands.map(cmd => cmd))
  }
})
