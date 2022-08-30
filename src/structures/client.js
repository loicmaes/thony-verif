const discord = require('discord.js')
const fs = require('fs')

class Client extends discord.Client {
  constructor() {
    super({ intents: 32767 });

    this.commands = new discord.Collection()
  }

  start () {
    require('../handlers/eventHandler')(this)
    require('../handlers/commandHandler')(this)

    this.login(process.env.TOKEN)
  }
}

module.exports = Client
