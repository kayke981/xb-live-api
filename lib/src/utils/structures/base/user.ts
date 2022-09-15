import Base from "./base";
import { UserReturns } from '../interface/user';

class BaseUser extends Base {
    public user: any | UserReturns = {}
    constructor(data: any) {
        super(data)
    }

    _data(data: any) {
        data.forEach((u: any) => {
            if(u.name === 'GameDisplayPicRaw') {
                this.user.avatar = u.value
            }
            if(u.name === 'Gamerscore') {
                this.user.gamescore = u.value
            }
            if(u.name === 'Gamertag') {
                this.user.gamertag = u.value
            }
            if(u.name === 'AccountTier') {
                this.user.tier = u.value
            }
            if(u.name === 'XboxOneRep') {
                this.user.rep = u.value
            }
            if(u.name === 'PreferredColor') {
                this.user.preferred_color = u.value
            }
            if(u.name === 'RealName') {
                this.user.name = u.value
            }
            if(u.name === 'Bio') {
                this.user.name = u.value
            }
            if(u.name === 'Location') {
                this.user.name = u.value
            }
        })
        return this.user
    }
}

export default BaseUser