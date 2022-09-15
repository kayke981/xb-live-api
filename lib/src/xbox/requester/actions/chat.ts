import Requester from '../request';
import constants from '../../../utils/const';

class API {
    private rest: any = {}

    constructor() {
        this.rest = new Requester({})
    }

    /**
    * @type {message} message
    * @returns {boolean}
    */

    sendMessage(message: string, id: string) {
        let payload = {
            xuid: `${id}`,
            message: `${message}`
        }
        let res = this.rest.request('POST', constants.uri.send.message, payload)
        if(res.status === 200) return true
        else return false
    }



}

export default API