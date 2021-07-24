const n = require('node-fetch');

async function account(number) {
	
		if (number) {
		return await n(`https://xbl.io/api/v2/account/${number}`, {
				headers: {
				'X-Authorization': String(process.env.api_token),
				'X-Contract': String(process.env.app_token),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
		})
		} else {
			return await n(`https://xbl.io/api/v2/account/`, {
				headers: {
				'X-Authorization': String(process.env.api_token),
				'X-Contract': String(process.env.app_token),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
			})
		}
}

module.exports = account;