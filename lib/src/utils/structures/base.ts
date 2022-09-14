import { ProfileUsersData } from '../structures/interface/base';

class Base {
    private data: any = null
    private profileUsers: ProfileUsersData = {}
    constructor(data: any) {
        this.data = data
        this._path(this.data)
    }

    _path(data: any) {
        let r = data[0]
        if('id' in r) {
            this.profileUsers.id = r.id
        } else if('settings' in r) {
            this.profileUsers.settings = r.settings
        }
    }
}

export default Base