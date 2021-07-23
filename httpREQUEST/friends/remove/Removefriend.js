const n = require('node-fetch');

async function remove(xuid) {
	if(!xuid) throw new TypeError('Provide a xuid')
	
	return await n(`https://xbl.io/api/v2/friends/remove/${xuid}`, {
			method: 'get',
			headers: {
				'X-Authorization': String(process.env.api_token),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
		});
}

module.exports = remove