const n = require('node-fetch');

async function search() {
if (!string) throw new TypeError('Provide a gamertag');
		return await n(`https://xbl.io/api/v2/friends/search?gt=${string}`, {
			method: 'get',
			headers: {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
		});
	}
	
	module.exports = search;