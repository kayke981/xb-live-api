const n = require('node-fetch')

async function sendmessage(number, string) {
return new Promise(async (res, rej) => {
	if(!number && string) throw new TypeError('Provide xuid and a message')
return await n('https://xbl.io/api/v2/conversations', {
   method: 'post',
   body: `{"xuid": "${number}", "message": "${string}"}`,
   	headers: {
				'X-Authorization': String(process.env.api_key),
				'X-Contract': String(process.env.app_key),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(process.env.lang)
			}
}).then(r => r.json()).then(res).catch(rej)
})
}

module.exports = sendmessage;