const Event = require('../structures/interaction/event')

module.exports = new Event({
  name: 'interactionCreate',
  async callback (client, interaction) {
    if (!interaction.isButton()) return
    if (interaction.customId !== 'verify') return

    const role = interaction.guild.roles.cache.get(process.env.ROLE)
    if (!role) return

    interaction.member.roles.add(role).then(async _ => {
      await interaction.reply({ content: ':white_check_mark: Votre compte a été vérifié avec succès !', ephemeral: true })
    })
  }
})
