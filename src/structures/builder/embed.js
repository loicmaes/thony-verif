const discord = require('discord.js')

class Embed {
  constructor(options) {
    this.title = options.title
    this.description = options.description
    this.author = options.author
    this.thumbnail = options.thumbnail
    this.image = options.image
    this.color = options.color
    this.footer = options.footer
    this.timestamp = options.timestamp
    this.fields = options.fields || []
  }

  build () {
    const embed = new discord.MessageEmbed()

    embed.setColor(this.color || '#FAFAFA')
    if (this.title) embed.setTitle(this.title)
    if (this.description) embed.setDescription(this.description)
    if (this.author) embed.setAuthor(this.author)
    if (this.thumbnail) embed.setThumbnail(this.thumbnail)
    if (this.image) embed.setImage(this.image)
    if (this.footer) embed.setFooter(this.footer)
    if (this.timestamp) embed.setTimestamp()
    if (this.fields) this.fields.forEach(f => embed.addField(f.name, f.value, f.inline || false))

    return embed
  }

  addField (name, value, inline) {
    this.fields.push({ name, value, inline })
  }
}

module.exports = Embed
