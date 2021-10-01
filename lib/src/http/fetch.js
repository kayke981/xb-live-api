const requestHandler = require('./http.js')
const cs = require('../Constants/Constants.js')

async function account(xuid) {
	let id = !xuid ? '' : xuid;
	return requestHandler('GET', `${cs.api + cs.endpoints.account + id}`)
}

async function achievements(xuid) {
	if (!xuid) throw new Error('Provide a XUID!')
	return requestHandler('GET', `${cs.api + cs.endpoints.achievements + xuid}`)
}

async function add(xuid) {
	if (!xuid) throw new Error('Provide a XUID!')
	return requestHandler('GET', `${cs.api + cs.endpoints.friend_add + xuid}`)
}

async function all() {
	return requestHandler('GET', `${cs.api + cs.endpoints.friend_all}`)
}

async function favorite(xuid) {
	if (!xuid) throw new Error('Provide a XUID!')
	const payload = `{"xuid": "${xuid}"}`
	return requestHandler('POST', `${cs.api + cs.endpoints.friend_favorite}`, payload)
}

async function remove(xuid) {
	if (!xuid) throw new Error('Provide a xuid!')
	return requestHandler('GET', `${cs.api + cs.endpoints.friend_remove + xuid}`)
}

async function unfavorite(xuid) {
	if (!xuid) throw new Error('Provide a XUID!')
	const payload = `{"xuid": "${xuid}"}`
	return requestHandler('POST', `${cs.api + cs.endpoints.friend_remove_favorite}`, payload)
}

async function search(gt) {
	if (!gt) throw new Error('Provide a gamertag!')
	return requestHandler('GET', `${cs.api + cs.endpoints.friend_search + gt}`)
}

async function get(xuid) {
	const id = !xuid ? '' : xuid
	return requestHandler('GET', `${cs.api + cs.endpoints.message_get + id}`)
}

async function send(xuid, msg) {
	if (!xuid) throw new Error('Provide a XUID!');
	if (!msg) throw new Error('Provide a message!');

	const payload = `{"xuid": "${xuid}", "message": "${msg}"}`
	return requestHandler('POST', `${cs.api + cs.endpoints.message_send}`, payload)
}

async function getParty() {
	return requestHandler('GET', `${cs.api + cs.endpoints.party_get_invite}`)
}

async function invite(id, xuid, name) {
	if (!id) throw new Error('If using this in your application first call "party.get()" to get a list of sessions (usually only 1) then call this endpoint to invite players to join the session. SessionName below is a value returned from party.get()')
	if (!xuid) throw new Error('Provide a xuid!')

	const payload = `{"xuid": "${xuid}", "sessionName": "${!name ? '' : name}"}`
	return requestHandler('POST', `${cs.api + cs.endpoints.party_send_invite + id}`, payload)
}

async function presence(xuid) {
	return requestHandler('GET', `${cs.api + xuid + cs.endpoints.presence}`)
}

async function recentPlayers() {
	return await requestHandler('GET', `${cs.api + cs.endpoints.recent_players}`)
}

module.exports = {
	account: account,
	achievements: achievements,
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
		get: getParty,
		invite: invite,
	},
	presence: presence,
	recentPlayers: recentPlayers
}