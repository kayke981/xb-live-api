const add = require('./add/Addfriend.js');
const favorite = require('./favorite/Addfavorite.js');
const remove = require('./remove/Removefriend.js');
const search = require('./search/Searchfriend.js');
const all = require('./all/all.js')

module.exports = {
	add: add,
	favorite: favorite,
	remove: remove,
	search: search,
	all: all
}