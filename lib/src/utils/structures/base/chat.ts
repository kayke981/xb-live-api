import Base from "./base";
import BaseUser from "./user";
import API from "../../../xbox/requester/actions/chat"

class BaseChat extends Base {
    public user: any = {}
    public hostId: number = 0
    private chat: any = {}
    constructor(data: any) {
        super(data)
        this.data = data
        this.user = BaseUser
        this.chat = new API()
    }

    _data(data: any) {
        if('hostId' in data) {
            this.hostId = data.id || data.hostId
        }
        if('settings' in data) {
            this.user = new this.user(data.settings)
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