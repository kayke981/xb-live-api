import { RequesterOptions } from '../../utils/structures/interface/options';
import fetch from 'node-fetch'

class Requester {
    public header: any = {};
    constructor(options: RequesterOptions) {

        this.header = options.headers || {}
        this.header.cookie = options.headers.cookie
        this.header.user_agent = options.headers.user_agent

        return this
    }

    async request(method: string, uri: string) {
        let res = await fetch(uri, {
            method: method,
            headers: this.header
        })
        return res
    }
}

export default Requester