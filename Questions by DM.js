client.on('message', message => {
  
    //check if the message is on a text or dm channel
    if(message.channel.type == "text")
    {
        message.channel.send("This command is not avaiable in a channel! Send him by DM on the bot!");
        return;
    }

    //ask first question
   message.author.send('Question 1!')
                
    //collect messages during 1 minute
   let filter = m => m.author.id === message.author.id;        
   let collector = message.channel.createMessageCollector(filter, { time: 60000});
        //console.log(collector)
    
        //detect collected message
        collector.on('collect', msg_colected => {
           
                //check next question
                switch(collector.collected.size)
                  {
                    case 1:
                            message.channel.send("Question 2!");
                            break
                    case 2:
                             message.channel.send("Question 3!");
                            break
                    case 3:
                             message.channel.send("Question 4!");
                            break
                    case 4:
                            message.channel.send("Question 5!");
                            break
                    case 5:
                            message.channel.send("Question 6!");
                            break
                    case 6:
                            message.channel.send("Question 7!");
                            break
                    case 7:
                            message.channel.send("Question 8!");
                            break
                    case 8:
                            message.channel.send("Question 9!");
                            break
                    case 9:
                            message.channel.send("Question 10!");
                            break
                 } 

                 //when all question are answered
                 if(collector.collected.size == 9)
                 {
                    message.channel.send("Thanks for answering all the questions!");
                 }             
            
           
        });
 
});