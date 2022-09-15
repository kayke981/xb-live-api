import { ClientOptions } from "../utils/structures/interface/client"

class Xbox {
    public language: string = ''
    private options: any = {}
    private api_token: string = ''
    private headers: any = {}
    /**
    * @param {language} languagae of datas
    * @public
    * @param {options} options
    * @param {api_token} API token
    * @param {headers} headers for requests
    * @private
    *
    * @params {ClientOptions} options for the client
     */
    constructor(api_token: string, options: ClientOptions) {
        
        /**
        * @type {api_token}
        * @type {options} client options
         */
        
       this.options = options
       this.api_token = api_token
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