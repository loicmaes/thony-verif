const { EventArgs } = require('discord.js')

/**
 * @template { keyof EventArgs } k
 * @param { Client } client
 * @param { EventArgs[k] } eventArgs
 * @constructor
 */
function RunFunction(client, ...eventArgs) {}

class Event {
  /**
   * @param {{ name: string, callback: RunFunction<k> }} data
   */
  constructor (data) {
    this.name = data.name;
    this.execute = data.callback
  }
}

module.exports = Event
