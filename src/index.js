const { GuildMember, Guild } = require("discord.js");
const { CreateError } = require("./arcadb/TypeError.js");
const { readFileSync, writeFileSync } = require("fs");

const MemberClass = () => JSON.parse(readFileSync(`${__dirname}/arcadb/users.json`, "utf8")); // Oku
const GuildClass = () => JSON.parse(readFileSync(`${__dirname}/arcadb/guilds.json`, "utf8")); // Oku
const ClassMember = (data) => writeFileSync(users, JSON.stringify(data, null, 2)); // Yaz Sunucu
const ClassGuild = (data) => writeFileSync(guilds, JSON.stringify(data, null, 2)); // Yaz Kullanıcı

const MemberClassRequest = MemberClass();
const GuildClassRequest = GuildClass();

module.exports.requestSet = function(data, value, filter) {
	if(!data) { new CreateError("Looks like something went wrong! @#data"); };
	if(!value) { new CreateError("Looks like something went wrong! @#value"); };
	if(!filter) { new CreateError("Looks like something went wrong! @#filter"); };

	if (filter instanceof GuildMember) {
		MemberClassRequest[data] = value;
		ClassMember(MemberClassRequest);
	} else if (filter instanceof Guild) {
		GuildClassRequest[data] = value;
		ClassGuild(GuildClassRequest);
	} else { new CreateError("Looks like something went wrong! @#filter"); };
}

module.exports.requestAdd = function(data, value, filter) {
	if(!data) { new CreateError("Looks like something went wrong! @#data"); };
	if(!value) { new CreateError("Looks like something went wrong! @#value"); };
	if(!filter) { new CreateError("Looks like something went wrong! @#filter"); };	

	if (filter instanceof GuildMember) {
		if(!MemberClassRequest[data] || MemberClassRequest[data] == undefined) { new CreateError("Looks like something went wrong! @#none"); };
		if(isNaN(MemberClassRequest[data])) { if(!isNaN(value)) { new CreateError("Looks like something went wrong! @#typeof"); }; };
		MemberClassRequest[data] += value;
		ClassMember(MemberClassRequest);
	} else if (filter instanceof Guild) {
		if(!GuildClassRequest[data] || GuildClassRequest[data] == undefined) { new CreateError("Kaydetme hatası! #none"); };
		if(isNaN(GuildClassRequest[data])) { if(!isNaN(value)) { new CreateError("Looks like something went wrong! @#typeof"); }; };
		GuildClassRequest[data] += value;
		ClassGuild(GuildClassRequest);
	} else { new CreateError("Looks like something went wrong! @#filter"); };
}

module.exports.requestRun = function(data, filter) {
	if(!data) { new CreateError("Looks like something went wrong! @#data"); };
	if(!filter) { new CreateError("Looks like something went wrong! @#filter"); };

	if (filter instanceof GuildMember) {
		return MemberClassRequest[data] ? true : false;
	} else if (filter instanceof Guild) {
		return GuildClassRequest[data] ? true : false;
	} else { new CreateError("Looks like something went wrong! @#filter"); };
}

module.exports.requestGet = function(data, filter) {
	if(!data) { new CreateError("Looks like something went wrong! @#data"); };
	if(!filter) { new CreateError("Looks like something went wrong! @#filter"); };

	if (filter instanceof GuildMember) {
		return MemberClassRequest[data] ? MemberClassRequest[data] : null;
	} else if (filter instanceof Guild) {
		return GuildClassRequest[data] ? GuildClassRequest[data] : null;
	} else { new CreateError("Looks like something went wrong! @#filter"); };
}

module.exports.requestDelete = function(data, filter) {
	if(!data) { new CreateError("Looks like something went wrong! @#data"); };
	if(!filter) { new CreateError("Looks like something went wrong! @#filter"); };

	if (filter instanceof GuildMember) {
		delete ClassMemberRequest[data];
		ClassMember(ClassMemberRequest);
	} else if (filter instanceof Guild) {
		delete GuildClassRequest[data];
		ClassGuild(GuildClassRequest);
	} else { new CreateError("Looks like something went wrong! @#filter"); };	
}

module.exports.requestAll = function(filter) {
	if(!filter) { new CreateError("Looks like something went wrong! @#filter"); };

	if (filter instanceof GuildMember) {
		return ClassMemberRequest;
	} else if (filter instanceof Guild) {
		return GuildClassRequest;
	} else { new CreateError("Looks like something went wrong! @#filter"); };	
}

module.exports.requestRemove = function(filter) {
	if(!filter) { new CreateError("Looks like something went wrong! @#filter"); };

	if (filter instanceof GuildMember) {
		ClassMember({});
	} else if (filter instanceof Guild) {
		ClassGuild({});
	} else { new CreateError("Looks like something went wrong! @#filter"); };
}
