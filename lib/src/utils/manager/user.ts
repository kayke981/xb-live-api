import Requester from "../../xbox/requester/request";
import BaseChat from "../structures/base/chat";
import constants from "../const";

class UserManager {
    private rest: any = {}
    private resolverUser: any = {}
    constructor() {
        this.rest = new Requester({})
        this.resolverUser = BaseChat
    }

    /**
    * @type {id} id of user
    * @returns {Promise<BaseChat>} 
    * @example
    *  // Find user
    * <User>.fetch('2535413400000000')
    */

    fetch(id: string) {
        let res = this.rest.request('GET', constants.uri.find.user+id)
        let user = this.resolverUser(res)
        return user
    }
}

export default UserManager