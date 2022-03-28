const config = require('./config.json');
const logger = require('./utils/logger');
const Discord = require('discord.js');
const Statcord = require("statcord.js");
const { token } = require('./utils/variables.js');
const client = new Discord.client();


const manager = new Discord.ShardingManager('./index.js', {
  token: token,
 //autoSpawn: true,
  //totalShards: 'auto'
  totalShards: 1
});
client.login(process.env.TOKEN);

manager.spawn();

manager.on('shardCreate', shard => logger.info(`Launching Shard ${shard.id + 1}`, { label: `Shard` }));
