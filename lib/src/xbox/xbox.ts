import { ClientOptions } from "../utils/structures/interface/client";
import UserManager from "../utils/manager/user";

class Xbox {
    public language: string = ''
    private options: any = {}
    private api_token: string = ''
    private headers: any = {}
    public user: any = {}
    /**
    * @param {language} language of datas
    * @public
    * @param {options} options
    * @param {api_token} api_token token
    * @param {headers} headers for requests
    * @param {user} user
    * @private
    *
    * @param {ClientOptions} ClientOptions for the client
     */
    constructor(api_token: string, options?: ClientOptions) {
        
        /**
        * @type {api_token}
        * @type {options} client options
         */

       this.options = options
       this.api_token = api_token
       this.user = new UserManager()
       this.set_env() 
        return this
    }

    set_env() {
        let env = process.env
        env.api_key = this.api_token
        env.app_key = this.options.app_token
        this.api_token = ''
        this.options = {
            language: this.options.language,
            headers: this.headers
        }
    }
}

export default Xbox