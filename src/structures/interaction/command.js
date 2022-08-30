const Client = require('../client')
const { CommandInteraction, CommandInteractionOption } = require('discord.js')

/**
 * @param { Client } client
 * @param { CommandInteraction } interaction
 * @constructor
 */
function RunFunction (client, interaction) {}

class Command {
  /**
   * @param {{ name: string, description: string, options: CommandInteractionOption, callback: RunFunction }} data
   */
  constructor (data) {
    this.name = data.name
    this.description = data.description
    this.options = data.options
    this.execute = data.callback
  }
}

module.exports = Command
