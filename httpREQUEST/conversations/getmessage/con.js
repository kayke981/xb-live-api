	const n = require('node-fetch');
	
	
	async function getmessage(xuid) {
		return new Promise(async (res, rej) => {
		if(xuid) {
			return await n(`https://xbl.io/api/v2/conversations/${xuid}`, {
			method: 'get',
				headers: {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
			}).then(r => r.json()).then(res).catch(rej)
		} else {
			return await n(`https://xbl.io/api/v2/conversations`, {
			method: 'get',
			 	headers: {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
		}).then(r => r.json()).then(res).catch(rej)
	}
		})
	}

	module.exports = getmessage;