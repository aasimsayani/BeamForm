'use strict'
import Config from 'config'
import {WordExpressDatabase} from 'wordexpress-schema'

public: {
  uploads: "",
},
private: {
  wp_prefix: "wp_"
  database: {
    name: "wordpress"
    username: "wordpress"
    password: ""
    host: "127.0.0.1"
  }
}

const publicSettings = Config.get('public')
const privateSettings = Config.get('private')

const Database = new WOrdExpressDatabase({publicSettings, privateSettings})
const {connnectors, models} = Database

export default Database
export {connectors, models}
