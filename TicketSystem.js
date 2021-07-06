const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
const tickets = [];



client.on('ready', () =>{

console.log("Bot is ready!");

});


client.on('message', message => {

	if(message.author.bot)
		return;

let channel = message.channel.type

if(channel == "dm")
{
	embedUser(message);
	const guild = client.guilds.cache.first();
	const ticketnumber = Math.random() * 9999;
	const ticketname = "ticket" + parseInt(ticketnumber)
	
	
	guild.channels.create(ticketname, { 
		permissionOverwrites: [
		{
			id: guild.roles.everyone.id,
			deny: ["VIEW_CHANNEL"],
		},

	],
		}).then(channel => {

			embedTicket(message,channel,ticketname,ticketnumber)
		});
	
}
else
{
	let channelname = message.channel.name

	if(channelname.includes("ticket"))
	{
		ticket_message_pop(message,channelname,"undefinned");
		
	}
}

});


function embedUser(message)
{
	   const guild = client.guilds.cache.first();
	    const guildname = guild.name;
	    const icon = guild.iconURL()
	 
	 
	    const embed = new Discord.MessageEmbed()
      // Set the title of the field
      .setTitle(guildname)
      // Set the color of the embed
      .setThumbnail(icon)
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription("You have open a ticket, please be patiente untill someone respond to you!");
    
      	message.channel.send(embed);
  	 
}

function embedTicket(message,channel,ticketname,ticketnumber)
{
	 
	
	 const embed = new Discord.MessageEmbed()
      // Set the title of the field
      .setTitle(ticketname)
      // Set the color of the embed
     .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription("Author: " + message.author.tag + "\n Reason: " + message.content);
    	
   const arr = [ ticketname, message.author.id]
	tickets.push(arr);
	 
    channel.send(embed).then(emb =>{
    	closeTicket(emb)
    	
    })

    
}

function closeTicket(emb)
{
	const filter = (reaction, user) => reaction.emoji.name === '🗑️'
	const collector = emb.createReactionCollector(filter, { dispose: true })
	collector.on('collect', r => {

		let channelname = emb.channel.name
  		ticket_message_pop("undefinned",channelname,1)
  		let channel = emb.channel;
  		channel.delete();
	}

		)

}



function ticket_message_pop(message,channelname,pop)
{
	for (var i = 0; i < tickets.length; i++) {
			t_index = tickets[i]
			t_name = t_index[0]
			t_user = t_index[1]

			if(channelname == t_name && pop == "undefined")
			{
				let user = client.users.cache.get(t_user)
				user.send(message.content);
				break
			}
			else if(channelname == t_name && pop != "undefined")
			{
				t_index.pop();
				break
			}
			
			
		}

}

client.login(token);


