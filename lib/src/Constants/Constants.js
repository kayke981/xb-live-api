const version = 'v2';

module.exports = {
	api: `https://xbl.io/api/${version}/`,
		messages: {
			'Invalid API Key.': 'your api key is invalid, please, put the correct api key'
		},
	endpoints: {
		account: 'account/',
		achievements: 'achievements/player/',
		friend_add: 'friends/add/',
		friend_all: 'friends/',
		friend_favorite: 'friends/favorite',
		friend_remove: 'friends/remove/',
		friend_remove_favorite: 'friends/favorite/remove',
		friend_search: 'friends/search?gt=',
		message_send: 'conversations',
		message_get: 'conversations/',
		party_send_invite: 'party/invite/',
		party_get_invite: 'party',
		presence: 'presence',
		recent_players: 'recent-players'
	}
}