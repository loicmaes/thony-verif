const Command = require('../structures/interaction/command')
const Embed = require('../structures/builder/embed')
const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = new Command({
  name: 'setup',
  description: 'Mettre en place le règlement.',
  async callback (client, interaction) {
    const channel = await interaction.guild.channels.cache.get(process.env.CHANNEL)
    if (!channel) return

    const embed = new Embed({
      title: 'Vérification',
      description: `Avant d'accéder au serveur, nous vous demandons de bien vouloir vérifier votre compte.`,
      color: '#49ce74'
    })

    const button = new MessageButton()
      .setCustomId("verify")
      .setLabel("Vérifier")
      .setStyle("SUCCESS")
      .setEmoji("✔")
    const components = new MessageActionRow().addComponents(button)

    channel.send({ content: null, embeds: [ embed ], components: [ components ] }).then(async msg => {
      await interaction.reply({ content: ':white_check_mark: Le message de vérification a bien été envoyé !', ephemeral: true })
    })
  }
})
