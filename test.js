const Discord = require("discord.js");
const client = new Discord.Client();
const ArcaClient = require("./src/arcadb/index.js");

client.on("ready", () => {
	console.log("Use Arcadb xd");
});

client.on("message", message => {
	if(message.content === "save") {
		ArcaClient.requestSet(`${message.guild.id}_save`, "done", message.member); // User data
		ArcaClient.requestSet(`${message.guild.id}_save`, "done", message.guild); // Server data
	};
	if(message.content === "add") {
		ArcaClient.requestAdd(`${message.guild.id}_save`, "done", message.member); // User data
		ArcaClient.requestAdd(`${message.guild.id}_save`, "done", message.guild); // Server data
	};
	if(message.content === "delete") {
		ArcaClient.requestDelete(`${message.guild.id}_save`, message.member); // User data
		ArcaClient.requestDelete(`${message.guild.id}_save`, message.guild); // Server data
	};
	if(message.content === "reset") {
		ArcaClient.requestRemove(message.member); // User data
		ArcaClient.requestRemove(message.guild); // Server data
	};
	if(message.content === "get") {
		console.log(ArcaClient.requestGet(`${message.guild.id}_save`, message.member)); // User data
		console.log(ArcaClient.requestGet(`${message.guild.id}_save`, message.guild)); // Server data
	};
	if(message.content === "check") {
		console.log(ArcaClient.requestRun(`${message.guild.id}_save`, message.member)); // User data
		console.log(ArcaClient.requestRun(`${message.guild.id}_save`, message.guild)); // Server data
	};
	if(message.content === "list") {
		console.log(ArcaClient.requestAll(message.member)); // User data
		console.log(ArcaClient.requestAll(message.guild)); // Server data
	};
});

client.login("DISCORD-TOKEN");
