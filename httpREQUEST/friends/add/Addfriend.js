const n = require('node-fetch')

	async function add(xuid) {
		return new Promise(async (res, rej) => {
		if (!xuid) throw new TypeError('Provide a xuid')
		
		return await n(`https://xbl.io/api/v2/friends/add/${xuid}`, {
			"headers": {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}

}).then(r => r.json()).then(res).catch(rej)
})
	}

module.exports = add
