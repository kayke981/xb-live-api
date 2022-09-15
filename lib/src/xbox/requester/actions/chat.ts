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
        let res = this.rest.request('POST', constants.uri.send.message, `"Payload: {\"xuid\": \"${id}\", \"message\": \"${message}\"}"`)
        if(res.ok) return true
        else return false
    }



}

export default API