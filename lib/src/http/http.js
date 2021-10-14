const fetch = require('node-fetch')
const cs = require('../Constants/Constants.js')

async function requestHandler(method, url, data) {
	if (!method) throw new Error('Provide a method!')
	if (!url) throw new Error('Provide an URL!')
	let options = {
		method: method,
		headers: {
			'X-Authorization': String(process.env.api_key),
			'X-Contract': String(process.env.app_key),
			"Accept": ['application/json', 'application/xml'],
			'Accept-Language': String(process.env.lang)
		}
	}

	if (data) {
		options.body = typeof data === 'string' ? data : JSON.stringify(data)
	}

	const rest = await fetch(url, options)

	const json = rest.json()
	//console.log(await json.then(r => r))
	const status = await json.then(r => r.status)
	const message = await json.then(r => r.message)
	const description = await json.then(r => r.description)

	if (!message) {
		if (description) throw new Error(await json.then(r => r.description))
		if (!description) return json.then(r => r);

	} else {
		if (cs.messages[message] !== undefined) {
			throw new Error(cs.messages[message])
		} else {
			throw new Error(message)
		}
	}
}


module.exports = requestHandler;