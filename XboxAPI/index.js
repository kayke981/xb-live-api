const friend = require('../httpREQUEST/friends/friend.js');
const party = require('../httpREQUEST/party/party.js');
const precense = require('../httpREQUEST/precense/precense/precense.js');
const recentplayers = require('../httpREQUEST/rcp/recentplayers/recentplayers.js');
const account = require('../httpREQUEST/account/account/acc.js');
const ach = require('../httpREQUEST/achieviments/achiviements/ach.js');
const conversations = require('../httpREQUEST/conversations/con.js');


class XboxAPI {
	constructor(options = {}) {
		
		if (typeof options !== "object") throw new TypeError('First parameter should be a object');


		this.api_key = options.api_key,
		this.app_key = options.app_key,
		this.lang = options.lang || 'pt-br';
	
		if(!this.api_key) throw new TypeError('Provide an api key');
		if(!this.app_key) throw new TypeError('Provide an app key');
		let data = process.env;
		
		data.api_key = this.api_key;
		data.app_key = this.app_key;
		data.lang = this.lang;

this.friend = friend;
this.party = party;
this.precense = precense;
this.recentplayers = recentplayers;
this.account = account;
this.achiviements = ach;
this.conversations = conversations;
	
	}
}

module.exports = XboxAPI;