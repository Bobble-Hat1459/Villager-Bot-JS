const Discord = require("discord.js")
const client = new Discord.Client()
const stillAlive = require("./server")
const prefix = '<'

//login response
client.on("ready", () => {  
  console.log("Signed in as Villager+")
})
client.once("ready", () => {
  console.log("Ready!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

//-------------------Commands----------------------//

//**----Realm Application----**//
client.on("message", msg => {
  if (msg.content === prefix + "realm app") {
    msg.channel.send("https://forms.gle/YFEa1ydrfDiUjeMK6")
  }
})

client.on("message", msg => {
  if (msg.content === prefix +"image") {
    msg.channel.send("https://imgur.com/gallery/3a8mlPJ")
  }
})





//----------------------End------------------------//

stillAlive() //server pings
client.login(process.env.TOKEN) //feed discord the login info