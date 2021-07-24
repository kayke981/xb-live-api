# Xbox-Live-API
Easy and simple API for xbox.

# How to get API token and App token 

go to https://xbl.io/ and log in to some account on Xbox, then press menu, profile and go down a little, and api key will appear, and press create, then go up a little and go to apps then click new app, put anything, in Public Key put anything, like: 1772683 

# Support server

https://discord.gg/jyfzwvadBy

# How it works? 

```js
const {XboxAPI} = require('xb-live-api');

let client = new XboxAPI({
  api_key: 'YOUR_API_TOKEN',
  app_key: 'YOUR_APP_TOKEN',
  lang: 'en-us' //default is pt-br
})
client.account('xuid').then(res => console.log(res))
```
> NOTE: xuid is the xbox account id

# How do you get the account id?

```js
const {XboxAPI} = require('xb-live-api')

let client = new XboxAPI({
	api_key: 'YOUR_API_TOKEN',
	app_key: 'YOUR_APP_TOKEN',
	lang: 'en-us'//default is pt-br
})

let gamertag = 'kayke293'
client.friend.search(gamertag).then(res => console.log(res))
```
> NOTE: id is hostid 

# How do you get the account id?

```js
const {XboxAPI} = require('xb-live-api')

let client = new XboxAPI({
	api_key: 'YOUR_API_TOKEN',
	app_key: 'YOUR_APP_TOKEN',
	lang: 'en-us'//default is pt-br
})

client.account().then(res => console.log(res))
```
# How do you send a friend request? 

```js
const {XboxAPI} = require('xb-live-api')

let client = new XboxAPI({
	api_key: 'YOUR_API_TOKEN',
	app_key: 'YOUR_APP_TOKEN',
	lang: 'en-us'// default is pt-br
})

client.friend.add('xuid')
```

## Functions

`account()` -> **get your information**

`account(xuid)` -> **get user information**

`friend.add(xuid)` -> **add a friend**

`friend.remove(xuid)` -> **remove a person as a friend**

`friend.search(gamertag)` -> **get a user's information by the gamertag**

`recentplayers()` -> **show recent players**

`precense()` -> **get friend's precense**

`precense(xuid)` -> **get friend's precense**

`conversations.getmessage()` -> **get message requests**

`conversations.getmessage(xuid)` -> **get a certain conversation**

`achiviements(xuid)` -> **get the user's achievements**

`friend.favorite(xuid)` -> **put one of your friends in the favorites list**

`friend.all()` -> **show all yours friends**

`conversations.sendmessage(xuid, message)` -> **send a message**

`party.getparty()` -> **get a party**

`party.sendinvite(sesionid, xuid, name)` -> **send invite party, If using this in your application first call "party.getparty()" to get a list of sessions (usually only 1) then call this endpoint to invite players to join the session. SessionName below is a value returned from party.getparty()**