const discord = require("discord.js")
const client = new discord.Client();
const MesageEmbed = new discord.MessageEmbed();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('message', message => {

    console.log(message.content)

    if (message.content === "how to embed") {

        console.log('sending')

        const embed = new MesageEmbed
            .setTitle('Yeet')
            .setColor(0xff0000)
            .setDescription('https://i.ytimg.com/vi/8hndCmL6jHU/hqdefault.jpg')
            .setThumbnail('https://i.ytimg.com/vi/8hndCmL6jHU/hqdefault.jpg')
            .setImage('https://i.ytimg.com/vi/8hndCmL6jHU/hqdefault.jpg')
    
        message.channel.send(embed).then(msg => {
            embed.setTitle('pee')
            msg.edit(embed)
        })
        
    }
});

client.login('ODY3NzcwMTkyMjgzOTU5MzM2.YPl7-A.Kmm6aq3Ipkj-Ylf3zDN0XsrFTTE');
