require('dotenv').config(); //initialize dotenv

const cron = require('node-cron');

// Task for 11:59 PM
const taskAt1159PM = () => {
    console.log('This task runs at 11:59 PM');
};
  
  // Task for 6 AM
const taskAt6AM = () => {
    console.log('This task runs at 6 AM');
};
  
// Schedule cron jobs for 11:59 PM and 6 AM
cron.schedule('59 23 * * *', taskAt1159PM); // '59 23 * * *' means 11:59 PM
cron.schedule('0 6 * * *', taskAt6AM);      // '0 6 * * *' means 6 AM


const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on("channelCreate", function(channel){
      console.log(`channelCreate: ${channel}`);
  });
  
client.on("guildUpdate", function(oldGuild, newGuild){
      console.log(`a guild is updated`);
  });
  
client.on("messageCreate", function(message){
      console.log(`a message was created`);
      channel = message.channel
      user_name = message.author.globalName
        channel.send('Thank you for your message *${user_name}*')
  });
  


//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token
