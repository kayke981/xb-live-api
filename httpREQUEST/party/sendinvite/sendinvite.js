const n = require('node-fetch');

async function sendinvite(id, xuid, name) {
	return new Promise(async (res, rej) => {
	if(!id) throw new TypeError('Provide a sessionid, If using this in your application first call "party.getparty()" to get a list of sessions (usually only 1) then call this endpoint to invite players to join the session. SessionName below is a value returned from party.getparty()')
	
	if(!xuid) throw new TypeError('Provide a xuid')

	return await n(`https://xbl.io/api/v2//party/invite/${id}`, {
		method: 'post',
   body: `{"xuid": "${xuid}", "sessionName": "${name}"}`,
   headers: {
        "x-Authorization": String(process.env.api_key),
        'x-Contract': String(process.env.app_key),
        'Accept': ['application/json', 'application/xml'],
        'Accept-Language': String(process.lang),
   }
}).then(r => r.json()).then(res).catch(rej)
})
}

module.exports = sendinvite