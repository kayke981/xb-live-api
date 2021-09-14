const requestHandler = require('./http.js')
const cs = require('../Constants/Constants.js')

async function account(xuid) {
	let id = !xuid ? '' : xuid;
	return await requestHandler('GET', `${cs.api + cs.endpoints.account + id}`)
}

async function achieviments(xuid) {
	if(!xuid) throw new Error('Provide a xuid!')
	return await requestHandler('GET', `${cs.api + cs.endpoints.achieviments + xuid}`)
}

async function add(xuid) {
	if(!xuid) throw new Error('Provide a xuid!')

	return await requestHandler('GET', `${cs.api + cs.endpoints.friend_add + xuid}`)
}

async function all() {
	return await requestHandler('GET', `${cs.api + cs.endpoints.friend_all}`)
}

async function favorite(xuid) {
	if(!xuid) throw new Error('Provide a xuid!')
	let payload = `{"xuid": "${xuid}"}`
	return await requestHandler('POST', `${cs.api + cs.endpoints.friend_favorite}`, payload)
}

async function remove(xuid) {
	if(!xuid) throw new Error('Provide a xuid!')
	return await reqeustHandler('GET', `${cs.api + cs.endpoints.friend_remove + xuid}`)
}

async function unfavorite(xuid) {
	if(!xuid) throw new Error('Provide a xuid!')
	let payload = `{"xuid": "${xuid}"}`
	return await requestHandler('POST', `${cs.api + cs.endpoints.friend_remove_favorite}`, payload)
}

async function search(gt) {
	if(!gt) throw new Error('Provide a gamertag!')
	return await requestHandler('GET', `${cs.api + cs.sendpoints.friend_search + gt}`)
}

async function get(xuid) {
	let id = !xuid?'':xuid;

	return await requestHandler('GET', `${cs.api + cs.endpoints.message_get + id}`)
}

async function send(xuid, msg) {
	if(!xuid) throw new Error('Provide a xuid!');
	if(!msg) throw new Error('Provide a message!');

	let payload = `{"xuid": "${xuid}", "message": "${msg}"}`

	return await requestHandler('POST', `${cs.api + cs.endpoints.message_send}`, payload)
	
}

async function getparty() {
	return await requestHandler('GET', `${cs.api + cs.endpoints.party_get_invite}`)
}

async function invite(id, xuid, name) {
	if(!id) throw new Error('If using this in your application first call "party.get()" to get a list of sessions (usually only 1) then call this endpoint to invite players to join the session. SessionName below is a value returned from party.get()')
	if(!xuid) throw new Error('Provide a xuid!')
	let payload = `{"xuid": "${xuid}", "sessionName": "${!name?'':name}"}`

	return await requestHandler('POST', `${cs.api + cs.endpoints.party_send_invite + id}`, payload)
}

async function precense(xuid) {
	let id = !precense?'':xuid;
	
	return await requestHandler('GET', `${cs.api + xuid + cs.endpoints.precense}`)
}

async function recentplayers() {
	return await requestHandler('GET', `${cs.api + cs.endpoints.recent_players}`)
}

module.exports = {
	account: account,
	achieviments: achieviments,
	friend: {
		add: add,
		all: all,
		favorite: favorite,
		remove: remove,
		unfavorite: unfavorite,
		search: search,
	},
	message: {
		get: get,
		send: send,
	},
	party: {
		get: getparty,
		invite: invite,
	},
	precense: precense,
	recentplayers: recentplayers
}