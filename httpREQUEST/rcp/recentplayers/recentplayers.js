const n = require('node-fetch');

	async function recentplayers() {
		
		return await n(`https://xbl.io/api/v2/recent-players`, {
			method: 'get',
			headers: {
				'X-Authorization': String(process.env.api_token),
				'X-Contract': String(process.env.app_token),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			},
		})
	}
	
	module.exports = recentplayers;