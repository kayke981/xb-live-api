import Base from "./base";
import { UserReturns } from '../interface/user';

class BaseUser extends Base {
    constructor(data: any) {
        super(data)
    }

    _data(data: any) {
        data = data.settings
        let user: any = {}
        data.forEach((u: any) => {
            if(u.id === 'GameDisplayPicRaw') {
                user.avatar = u.value
            }
            if(u.id === 'Gamerscore') {
                user.gamescore = u.value
            }
            if(u.id === 'Gamertag') {
                user.gamertag = u.value
            }
            if(u.id === 'AccountTier') {
                user.tier = u.value
            }
            if(u.id === 'XboxOneRep') {
                user.rep = u.value
            }
            if(u.id === 'PreferredColor') {
                user.preferred_color = u.value
            }
            if(u.id === 'RealName') {
                user.name = u.value
            }
            if(u.id === 'Bio') {
                user.bio = u.value
            }
            if(u.id === 'Location') {
                user.location = u.value
            }
            else return;
        })
        return user
    }
}

export default BaseUser