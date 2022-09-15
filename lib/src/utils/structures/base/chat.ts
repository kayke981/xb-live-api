import Base from "./base";
import BaseUser from "./user";
import API from "../../../xbox/requester/actions/chat"

class BaseChat extends Base {
    private user: any = {}
    private hostId: any = null
    private chat: any = {}
    private userResolver: any = {}
    constructor(data: any) {
        super(data)
        this.data = data
        this.user = new BaseUser(data)
        this.chat = new API()
    }

    _data(data: any) {
        if('settings' in data) {
            this.user = this.user
        }
        if('hostId' in data) {
            this.hostId = data.id || data.hostId
        }
    }

    /**
    * @type {message} message
    * @returns {boolean}
    * @example
    *  // Send message
    *  
    */

    send(message: string) {
        return this.chat.sendMessage(message, this.data.hostId)
    }
}

export default BaseChat