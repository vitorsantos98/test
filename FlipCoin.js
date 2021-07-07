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

	if(message.content.includes("!flip"))
		{
			let args = message.content.split(" ");
			let coin_choose = args[1];
			
			number_coin_face = Math.random() * 2;
			number_coins = Math.random() * 100;
			number_coins = parseInt(number_coins)
		

			if(number_coin_face >= 1 && coin_choose == "heads")
			{
				message.channel.send("Heads!\nYou have got " + number_coins + "coins!")

			}
			
			if(number_coin_face >= 0 && number_coin_face < 1 && coin_choose == "heads")
			{
				message.channel.send("Badluck!")
			}

			if(number_coin_face >= 0 && coin_choose == "tails")
			{
				message.channel.send("Tails!\nYou have got " + number_coins + "coins!")
			}
			
			if(number_coin_face >= 1 && number_coin_face < 2 && coin_choose == "tails")
			{
				message.channel.send("Badluck!")
			}
		}
	

	


});


client.login(token);


