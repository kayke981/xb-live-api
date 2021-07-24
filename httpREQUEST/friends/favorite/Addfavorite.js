const n = require('node-fetch')

	async function favorite(xuid) {
		if (!xuid) throw new TypeError('provide a xuid');
		return await n('https://xbl.io/api/v2/friends/favorite', {
			method: 'post',
			body: `{"xuid": "${xuid}"}`,
			headers: {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang),
			},
		})
	}
	
module.exports = favorite
