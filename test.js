const Discord = require("discord.js");
const client = new Discord.Client();
const ArcaClient = require("./src/arcadb/index.js");

client.on("ready", () => {
	console.log("Hello, Discord!");
});

client.on("message", message => {
	if(message.content === "kaydet") {
		ArcaClient.requestSet(`${message.guild.id}_kaydet`, "veri kaydettim", message.member);
	};
	if(message.content === "ekle") {
		ArcaClient.requestAdd(`${message.guild.id}_kaydet`, "veri kaydettim", message.member);
	};
	if(message.content === "sil") {
		ArcaClient.requestDelete(`${message.guild.id}_kaydet`, message.member);
	};
	if(message.content === "sıfırla") {
		ArcaClient.requestRemove(message.member);
	};
	if(message.content === "getir") {
		console.log(ArcaClient.requestGet(`${message.guild.id}_kaydet`, message.member));
	};
	if(message.content === "kontrol") {
		console.log(ArcaClient.request(`${message.guild.id}_kaydet`, message.member));
	};
	if(message.content === "listele") {
		console.log(ArcaClient.requestAll(message.member));
	};
});

client.login("DISCORD-TOKEN");