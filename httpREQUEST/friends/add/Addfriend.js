const n = require('node-fetch')

/*class add {
	constructor() {}
*/
	async function add(xuid) {
		if (!xuid) throw new TypeError('Provide a xuid')
		
		return await n(`https://xbl.io/api/v2/friends/add/${xuid}`, {
			"headers": {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
		});
	}
//}

module.exports = add
