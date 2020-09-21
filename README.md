# Arcadb : Powerfull JSON Database

<br>Yüklemek için!</br>

```
npm i arcadb *Yakında
```

# Bilgilendirme

Neden arcadb kullanmalıyım? : Arcadb kullanıcı ve sunucu verilerini 2 dosyaya ayırarak verilerinizin silinmesi patlaması gibi durumları engellemekte

# Kullanım (NodeJS)

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const ArcaClient = require("./src/arcadb/index.js");

client.on("ready", () => {
	console.log("Hello, Discord!");
});

client.on("message", message => {
  // Kullanıcı verilerini kaydetmek için <message>.member kullanınız eğer Sunucu verilerini kaydetmek isterseniz <message>.guild kullanınız
	if(message.content === "kaydet") {
		ArcaClient.requestSet(`${message.guild.id}_kaydet`, "veri kaydettim", message.member);
    // Kullanıcı verisi oluşturma
	};
	if(message.content === "ekle") {
		ArcaClient.requestAdd(`${message.guild.id}_kaydet`, "veri kaydettim", message.member);
    // Kullanıcı verisi kaydetme / Önceki verinin devamına kaydeder Örnek: Önceki değer x sonraki : xy
	};
	if(message.content === "sil") {
		ArcaClient.requestDelete(`${message.guild.id}_kaydet`, message.member);
    // Kullanıcı verisini siler
	};
	if(message.content === "sıfırla") {
		ArcaClient.requestRemove(message.member);
    // Kullanıcı verilerinin dosyasını sıfırlar
	};
	if(message.content === "getir") {
		console.log(ArcaClient.requestGet(`${message.guild.id}_kaydet`, message.member));
    // Kullanıcı verisini getirir
	};
	if(message.content === "kontrol") {
		console.log(ArcaClient.request(`${message.guild.id}_kaydet`, message.member));
    // Kullanıcı verisinin olup olmadığını yoklar
	};
	if(message.content === "listele") {
		console.log(ArcaClient.requestAll(message.member));
    // Kullanıcı verilerinin tümünü listeler
	};
});

client.login("DISCORD-TOKEN");
```

# İletişim

Discord **maven#0571**
