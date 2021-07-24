const n = require('node-fetch');

async function precense(xuid) {

		if(xuid) {
			return await n(`https://xbl.io/api/v2/${xuid}/precense`, {
			method: 'get',
			headers: {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
			})
		} else {
			return await n(`https://xbl.io/api/v2/precense`, {
			method: 'get',
			headers: {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
			})
		}
	}
module.exports = precense;