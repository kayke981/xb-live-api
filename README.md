# Xbox-Live-API
Easy and simple API for xbox.

# How to get API token and App token 

go to https://xbl.io/ and log in to some account on Xbox, then press menu, profile and go down a little, and api key will appear, and press create, then go up a little and go to apps then click new app, put anything, in Public Key put anything, like: 1772683(**app key isn't necessary, you can put nothing**)

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

## Functions

`account()` -> **get your information**

`account(xuid)` -> **get user information**

`friend.add(xuid)` -> **add a friend**

`friend.remove(xuid)` -> **remove a person as a friend**

`friend.search(gamertag)` -> **get a user's information by the gamertag**

`recentplayers()` -> **show recent players**

`precense()` -> **get friend's precense**

`precense(xuid)` -> **get friend's precense**

`message.get()` -> **get message requests**

`message.get(xuid)` -> **get a certain conversation**

`achiviements(xuid)` -> **get the user's achievements**

`friend.favorite(xuid)` -> **put one of your friends in the favorites list**

`friend.unfavorite(xuid)` -> **remove one of your friends in the favorites list**

`friend.all()` -> **show all yours friends**

`message.send(xuid, message)` -> **send a message**

`party.get()` -> **get a party**

`party.invite(sesionid, xuid, name)` -> **send invite party, If using this in your application first call "party.get()" to get a list of sessions (usually only 1) then call this endpoint to invite players to join the session. SessionName below is a value returned from party.get()**