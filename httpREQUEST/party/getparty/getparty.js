const n = require('node-fetch');

async function getparty() {
		
		return await n(`https://xbl.io/api/v2/party`, {
			method: 'get',
			headers: {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
			});
	}
	

module.exports = getparty;