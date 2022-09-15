import { RequesterOptions } from '../../utils/structures/interface/request';
import constants from '../../utils/const'
import fetch from 'node-fetch'

class Requester {
    public header: any = {};
    public body: string = ''

    /**
    * @type {header}
    * @public
     */

    constructor(options: RequesterOptions) {

        /**
        * @param {RequesterOptions} options for requests
         */

        this.header = options.headers || {}

        this.header["X-Authorization"] = `["${process.env.api_key}", "${process.env.app_token}"]`
        this.header["Accept"] = `["application/json", "application/xml"]`
        this.header["X-Contract"] = "100"
        this.header["Accept-Language"] = options.language || 'en-US'

        this.header.cookie = options.headers?.cookie
        this.header.user_agent = options.headers?.user_agent

        return this
    }

    /**
    * @returns {object}
     */

    async request(method: string, uri: string, data?: string) {
        let res = await fetch(constants+uri, {
            method: method,
            headers: this.header,
            body: data || ""
        })
        let json;
        try {
            json = res.json()
        } catch {
            throw new Error(`[${res.status}] Can't load JSON. Error: ${res.statusText}`)
        }

        return json
    }

    /**
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