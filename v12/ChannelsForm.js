const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
let form = [];

client.on('ready', () =>{

console.log("Bot is ready!");

});

client.on('message', message => {

	if(message.author.bot)
		return;

	if(message.content.includes("!form"))
		{
			form = message.content.split(" ")
			form.splice(0,1);
					
		}
	

	check_form(message);


//Name:
//Age:
//Country:
//Gender:

});


function check_form(message)
{
	
		if(form.length == 0 || message.content.includes("!form"))
			return

		let check_index = 0

		for(let i = 0;i < form.length;i++)
		{
			form_index = form[i];

			if(message.content.includes(form_index))
			{
				check_index++
			}
		}

		if(check_index == form.length)
		{
			console.log("Form correct!")
		}
		else
		{
			message.delete();
			message.author.send("Form invaled! Please send the correct form!")
		}
}


client.login(token);


