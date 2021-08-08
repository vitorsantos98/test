const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
const shop = [ ["Potatos","5"], ["Beans","17"], ["Berrys","21"], ["Apples","23"] ];
let wallet = 100;

client.on('ready', () =>{

console.log("Bot is ready!");

});

client.on('message', message => {

	if(message.author.bot)
		return;

	 args = message.content.split(" ");

	args = args.slice(1);

	if(message.content == ("!shop"))
		{
			message.channel.send("1 - Potatos\n2- Beans\n3- Berrys\n4 - Apples")
		}

	if(message.content.includes("!buy"))
	{
		market(message,args)
	}

	
});


function market(message,args)
{
	
	for (var i = 0; i < shop.length; i++) {
		product = shop[i]
		product_name = product[0];
		product_coins = parseInt(product[1])
		//console.log("A: ")		
		if(args[0] == product_name)
		{
			let product_total_cost = parseInt(product_coins) * parseInt(args[1]);
			let product_bag = [product_name,product_coins]
			console.log(args[0])
			if(product_total_cost < wallet)
			{
			wallet -= product_total_cost
			message.channel.send("You have buy " + args[1] + " " + product_name + " for " + product_total_cost + " coins!")
			
			break
			}
			else
			{
				message.channel.send("No money on the wallet to buy!")
			}
		}
		
		
	}
}

client.login(token);


