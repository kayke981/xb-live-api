const n = require('node-fetch')

async function sendmessage(number, string) {
	if(!number && string) throw new TypeError('Provide xuid and a message')
return await n('https://xbl.io/api/v2/conversations', {
   method: 'post',
   body: `{"xuid": "${number}", "message": "${string}"}`,
   	headers: {
				'X-Authorization': String(process.env.api_token),
				'X-Contract': String(process.env.app_token),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
});
}

module.exports = sendmessage;