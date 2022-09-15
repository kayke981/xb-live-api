import Requester from "../../xbox/requester/request";
import BaseUser from "../structures/base/user";
import constants from "../const";

class UserManager {
    private rest: any = {}
    private resolverUser: any = {}
    constructor() {
        this.rest = new Requester({})
        this.resolverUser = BaseUser
    }

    /**
    * @type {id} id of user
    * @returns {Promise<BaseChat>} 
    * @example
    *  // Find user
    * <User>.fetch('2535413400000000')
    */

    async fetch(id?: string) {
        id? id = id : id = ''
        let res = await this.rest.request('GET', constants.uri.find.user+id)
        let user = new this.resolverUser(res)
        return user
    }
}

export default UserManager