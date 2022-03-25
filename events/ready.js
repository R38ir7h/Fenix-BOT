const muteModel = require('../models/mute');
const Event = require('../structures/Event');
const logger = require('../utils/logger');
const Maintenance = require('../database/schemas/maintenance');
const jsconfig = require("../config")
module.exports = class extends Event {
    async run() {

const maintenance = await Maintenance.findOne({
  maintenance: "maintenance"
})

if(maintenance && maintenance.toggle == "true"){

  

    this.client.user.setPresence({ status: 'dnd' });
    this.client.user.setActivity('Under Maintenance')

  

logger.info(`✅ loaded Maintenance Mode `, { label: 'Status' })
} else {
    const activities = [
      { name: jsconfig.bot_name, type: 'WATCHING' }, 
      { name: `FW | Rebirth`, type: 'LISTENING' }, 
    ];
  

    this.client.user.setPresence({ status: 'online', activity: activities[0] });
  
    let activity = 1;
  

    setInterval(() => {
      activities[2] = { name: `За ${ this.client.guilds.cache.size} сервером`, type: 'WATCHING' };
      activities[3] = { name: `Rebirth Game k21`, type: 'PLAYING' }; 
      activities[4] = { name: `Fw-rebirth.com`, type: 'WATCHING' };  
      activities[5] = { name: `Forum.fw-rebirth.com`, type: 'WATCHING' };
      activities[6] = { name: `Vk.com/fwrebirth`, type: 'WATCHING' };   
      activities[7] = { name: `за порядком`, type: 'WATCHING' }; 
      activities[8] = { name: `за ${ this.client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} участником`, type: 'WATCHING' }; 
      if (activity > 9) activity = 0;
      this.client.user.setActivity(activities[activity]);
      activity++;
    }, 30000);


            logger.info(`✅ loaded: Bot Status `, { label: 'Status' })

      
  }
}

}

