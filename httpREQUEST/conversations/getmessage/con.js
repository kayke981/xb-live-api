	const n = require('node-fetch');
	
	
	async function getmessage(xuid) {
		
		if(xuid) {
			return await n(`https://xbl.io/api/v2/conversations/${xuid}`, {
			method: 'get',
				headers: {
				'X-Authorization': String(process.env.api_token),
				'X-Contract': String(process.env.app_token),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
			})
		} else {
			return await n(`https://xbl.io/api/v2/conversations`, {
			method: 'get',
			 	headers: {
				'X-Authorization': String(process.env.api_token),
				'X-Contract': String(process.env.app_token),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
		})
	}
	}

	module.exports = getmessage;