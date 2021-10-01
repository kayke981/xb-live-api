# Xbox-Live-API
Easy and simple API for xbox.

# How to get the API token and app token 

Go to https://xbl.io/ and log in to your Xbox account. Go to your profile page and create an API key by pressing the Create button in the API Keys area.

# Support server

https://discord.gg/jyfzwvadBy

# How it works? 

```js
const {Xbox} = require('xb-live-api');

let client = new Xbox()
client.run('YOUR_API_KEY', 'YOUR_APP_KEY', 'language')// the default language is pt-br
client.account().then(r => console.log(r))
```
return: 
```
{
profileUsers: [
 {
  id: '2533274947420660',
  hostId: '2533274947420660',
  settings: [Array],
  isSponsoredUser: false
   }
  ]
}
```
> NOTE: xuid is the xbox account id

# How do you get the account id?

```js
const {Xbox} = require('xb-live-api');

let client = new Xbox()
client.run('YOUR_API_KEY', 'YOUR_APP_KEY', 'language')// the default language is pt-br

let gamertag = 'kayke293'
client.friend.search(gamertag).then(r => console.log(r))
```

return: 
```
{
profileUsers: [
 {
  id: '2533274947420660',
  hostId: '2533274947420660',
  settings: [Array],
  isSponsoredUser: false
   }
  ]
}
```
> NOTE: id is hostid

# How do you get the account id?

```js
const {Xbox} = require('xb-live-api');

let client = new Xbox()
client.run('YOUR_API_KEY', 'YOUR_APP_KEY', 'language')// the default language is pt-br

client.account().then(r => console.log(r))
```

return: 
```
{
profileUsers: [
 {
  id: '2533274947420660',
  hostId: '2533274947420660',
  settings: [Array],
  isSponsoredUser: false
   }
  ]
}
```
# How do you send a friend request? 

```js
const {Xbox} = require('xb-live-api');

let client = new Xbox()
client.run('YOUR_API_KEY', 'YOUR_APP_KEY', 'language')// the default language is pt-br

client.friend.add('xuid')
```

## Methods

`account()` -> **get your information**

`account(xuid)` -> **get user information**

`friend.add(xuid)` -> **add a friend**

`friend.remove(xuid)` -> **remove a person as a friend**

`friend.search(gamertag)` -> **get a user's information by the gamertag**

`recentPlayers()` -> **show recent players**

`presence()` -> **get your presence**

`presence(xuid)` -> **get someone's presence**

`message.get()` -> **get message requests**

`message.get(xuid)` -> **get a conversation**

`achievements(xuid)` -> **get the user achievements**

`friend.favorite(xuid)` -> **put one of your friends in the favorites list**

`friend.unfavorite(xuid)` -> **remove one of your friends in the favorites list**

`friend.all()` -> **show all yours friends**

`message.send(xuid, message)` -> **send a message**

`party.get()` -> **get a party**

`party.invite(sesionid, xuid, name)` -> **send invite party, If using this in your application first call "party.get()" to get a list of sessions (usually only 1) then call this endpoint to invite players to join the session. SessionName below is a value returned from party.get()**