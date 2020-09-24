# Powerfull JSON Database

<br>Yüklemek için!</br>

```
npm i arcadb *Yakında
```

# About and Informations / Hakkında

Neden <a href="https://github.com/maven0571/Arcadb">**Arcadb**</a>? : Arcadb JSON Dosyasını fazla yormamak için Kullanıcı ve Sunucu verilerini 2 JSON Dosyasına ayırır bu şekilde veri çekerken gecikme yaşamazsınız ayrıca olabilicek bir ihtimalide engellemekte bu ihtimal verilerinizin tutulduğu JSON Dosyasının patlamasıdır (Bozulmasıdır) sanırsam böyle bir şey olmasını istemezsiniz.

# Usage / Kullanım (NodeJS)

```js
const ArcaClient = require("arcadb");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Hello Discord!");
});

client.on("message", message => {
  // How to save data? // Nasıl veri kaydederiz?
  ArcaClient.requestSet(`${message.guild.id}_save`, "Done", message.member); // User data // Kullanıcı verisi
  // How to add data? // Nasıl veri ekleriz?
  ArcaClient.requestAdd(`${message.guild.id}_save`, "Done", message.member); // User data // Kullanıcı verisi
  // How to Delete data? // Nasıl veri sileriz
   ArcaClient.requestDelete(`${message.guild.id}_save`, message.member); // User data // Kullanıcı verisi
  // How to rest all data? // Nasıl tüm verileri sıfırlarız?
   ArcaClient.requestRemove(message.member); // User data // Kullanıcı verisi
  // How to get data? // Nasıl veri getiririz?
   ArcaClient.requestGet(`${message.guild.id}_save`, message.member); // User data // Kullanıcı verisi
  // How to check data? // Nasıl veriyi kontrol ederiz?
    ArcaClient.requestRun(`${message.guild.id}_save`, message.member); // User data // Kullanıcı verisi
  // How to list all data? // Tüm verileri nasıl listeleriz?
  ArcaClient.requestAll(message.member); // User data // Kullanıcı verisi
  
  client.login("DISCORD-APPLICATION-TOKEN");
});
```

# İletişim

Discord **maven#0571**
