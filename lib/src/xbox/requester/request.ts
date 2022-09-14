import { RequesterOptions } from '../../utils/structures/interface/request';
import fetch from 'node-fetch'

class Requester {
    public header: any = {};

    /*
    * @type {header}
    * @public
     */

    constructor(options: RequesterOptions) {

        /*
        * @param {RequesterOptions} options for requests
        */

        this.header = options.headers || {}
        this.header.cookie = options.headers.cookie
        this.header.user_agent = options.headers.user_agent

        return this
    }

    /*
    * @returns {object}
    */

    async request(method: string, uri: string) {
        let res = await fetch(uri, {
            method: method,
            headers: this.header
        })
        return res
    }

    /*
    * @returns {object}
    */

    get_headers(headers: any) {
        if(typeof headers !== 'object') throw new TypeError(`${headers} is not a "object"`)
        let ratelimit: any = {}
        ratelimit.limit = headers["X-RateLimit-Limit"]
        ratelimit.spent = headers["X-RateLimit-Spent"]
        ratelimit.remaining = headers["X-RateLimit-Remaining"]

        return ratelimit

    }
}

export default Requester