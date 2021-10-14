const requestHandler = require('./src/http/http.js');
const func = require('./src/functions/index.js');

class Xbox {
	constructor() {
		// Functions
		this.account = func.account;
		this.achievements = func.achievements;
		this.friend = func.friend;
		this.message = func.message;
		this.party = func.party;
		this.presence = func.presence;
		this.recentPlayers = func.recentPlayers;
		// Endpoints
		this.endpoints = Object.values(require('./src/Constants/Constants.js').endpoints).length
	}

	// API token and app token
	run(api, app, lang) {
		let api_key = api;
		let app_key = app;
		let language = lang || 'pt-br'
		if (!api_key) throw new Error('Provide your api_key');
		let data = process.env;
		data.api_key = api_key;
		data.app_key = app_key;
		data.lang = language;
	}

	// Get API token and app token
	secret() {
		return {
			api_key: process.env.api_key,
			app_key: process.env.app_key
		}
	}
	// HTTP request
	async requestHandler(method, url, data) {
		let options = {}
		if (data) {
			options.body = typeof data === 'string' ? data : JSON.stringify(data);
		}

		return await requestHandler(method, url, options)
	}
}

module.exports = Xbox;