const Event = require('../structures/interaction/event')

module.exports = new Event({
  name: 'interactionCreate',
  async callback (client, interaction) {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)
    if (!command) return interaction.reply({ content: `:x: Cette commande n'existe pas !`, ephemeral: true })
    await command.execute(client, interaction)
  }
})
