require('dotenv').load()
const Discord = require('discord.js')
const { DiceRoller } = require('rpg-dice-roller')
const client = new Discord.Client()
client.on('message', msg => {
  let m = msg.content
  if (m.startsWith('!f') || m.startsWith('!F')) m = m.replace(/^\!f/i, '!roll 4dF')
  if (m.startsWith('!roll ')) {
    const diceExpr = m.replace('!roll ', '')
    const roll = new DiceRoller()
    roll.roll(diceExpr)
    msg.reply(roll.log.shift().toString())
  }
})
client.on('ready', () => {
  client.user.setActivity('!roll or !f', {type: 'LISTENING'})
})
client.login(process.env.DISCORD_TOKEN)
