const { GuildMember, Guild } = require("discord.js");
const { CreateError } = require("./arcadb/TypeError.js");
const { readFileSync, writeFileSync } = require("fs");
const { users, guilds } = { users: `${__dirname}/arcadb/users.json`, guilds: `${__dirname}/arcadb/guilds.json` };

const MemberClass = () => JSON.parse(readFileSync(users, "utf8"));
const GuildClass = () => JSON.parse(readFileSync(guilds, "utf8"));
const ClassMember = (data) => writeFileSync(users, JSON.stringify(data, null, 2));
const ClassGuild = (data) => writeFileSync(guilds, JSON.stringify(data, null, 2));

const ClassMemberRequest = MemberClass();
const GuildClassRequest = GuildClass();

const MemberClassRequest = MemberClass();
const ClassGuildRequest = GuildClass();

module.exports.requestSet = function(data, value, filter) {
	if(!data) { new CreateError("Kaydetme hatası! #data"); };
	if(!value) { new CreateError("Kaydetme hatası! #value"); };
	if(!filter) { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };

	if (filter instanceof GuildMember) {
		ClassMemberRequest[data] = value;
		ClassMember(ClassMemberRequest);
	} else if (filter instanceof Guild) {
		GuildClassRequest[data] = value;
		ClassGuild(GuildClassRequest);
	} else { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };
}

module.exports.requestAdd = function(data, value, filter) {
	if(!data) { new CreateError("Kaydetme hatası! #data"); };
	if(!value) { new CreateError("Kaydetme hatası! #value"); };
	if(!filter) { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };	

	if (filter instanceof GuildMember) {
		if(!MemberClassRequest[data] || MemberClassRequest[data] == undefined) { new CreateError("Kaydetme hatası! #none"); };
		if(isNaN(MemberClassRequest[data])) { if(!value) { new CreateError("Kaydetme hatası! #typeof"); }; };
		ClassMemberRequest[data] += value;
		ClassMember(ClassMemberRequest);
	} else if (filter instanceof Guild) {
		if(!MemberClassRequest[data] || MemberClassRequest[data] == undefined) { new CreateError("Kaydetme hatası! #none"); };
		if(isNaN(MemberClassRequest[data])) { if(!value) { new CreateError("Kaydetme hatası! #typeof"); }; };
		GuildClassRequest[data] += value;
		ClassGuild(GuildClassRequest);
	} else { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };
}

module.exports.request = function(data, filter) {
	if(!data) { new CreateError("Yoklama hatası! #data"); };
	if(!filter) { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };

	if (filter instanceof GuildMember) {
		return MemberClassRequest[data] ? true : false;
	} else if (filter instanceof Guild) {
		return ClassGuildRequest[data] ? true : false;
	} else { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };
}

module.exports.requestGet = function(data, filter) {
	if(!data) { new CreateError("Yoklama hatası! #data"); };
	if(!filter) { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };

	if (filter instanceof GuildMember) {
		return MemberClassRequest[data] ? MemberClassRequest[data] : null;
	} else if (filter instanceof Guild) {
		return ClassGuildRequest[data] ? ClassGuildRequest[data] : null;
	} else { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };
}

module.exports.requestDelete = function(data, filter) {
	if(!data) { new CreateError("Silme hatası! #data"); };
	if(!filter) { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };

	if (filter instanceof GuildMember) {
		delete ClassMemberRequest[data];
		ClassMember(ClassMemberRequest);
	} else if (filter instanceof Guild) {
		delete GuildClassRequest[data];
		ClassGuild(GuildClassRequest);
	} else { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };	
}

module.exports.requestAll = function(filter) {
	if(!filter) { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };

	if (filter instanceof GuildMember) {
		return ClassMemberRequest;
	} else if (filter instanceof Guild) {
		return GuildClassRequest;
	} else { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };	
}

module.exports.requestRemove = function(filter) {
	if(!filter) { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };

	if (filter instanceof GuildMember) {
		ClassMember({});
	} else if (filter instanceof Guild) {
		ClassGuild({});
	} else { new CreateError("Filtreleme hatası! #GuildMember / #Guild"); };
}