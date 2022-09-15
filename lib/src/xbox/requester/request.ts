import { RequesterOptions } from '../../utils/structures/interface/request';
import constants from '../../utils/const'
import axios from 'axios'

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

        this.header["X-Authorization"] = process.env.api_token
        this.header["Accept"] = `["application/json", "application/xml"]`
        // this.header["X-Contract"] = "100"
        this.header["Accept-Language"] = options.language || 'en-US'
        return this
    }

    /**
    * @returns {object}
     */

    async request(method: string, uri: string, data?: any) {
        console.log(this.header)
        let res = await axios(constants.api+uri, {
            method: method,
            headers: this.header,
            data: data || {}
        }).then(response => { return response })
        if(res.data.status === false) throw new Error(res.data.message|| res.status)
        let json = res.data
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