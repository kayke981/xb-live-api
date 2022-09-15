import { ClientOptions } from "../utils/structures/interface/client";
import UserManager from "../utils/manager/user";

class Xbox {
    public language: string = 'en-US'
    public users: any = {}
    /**
    * @param {language} language of datas
    * @param {users} users
    * @public
    *
    * @param {ClientOptions} ClientOptions for the client
     */
    constructor(api_token: string, options?: ClientOptions) {
        
        /**
        * @type {api_token}
        * @type {options} client options
         */

       process.env.api_token = api_token
       this.users = new UserManager()
       this.set_env(options) 
        return this
    }

    set_env(options?: any) {
        let env = process.env
        env.app_key = options.app_token || ""
        options = {
            language: options.language,
            headers: options.headers
        }
    }
}

export default Xbox