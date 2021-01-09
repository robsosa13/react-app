import axios from 'axios'
import {APIHOST as host} from'../../app.json'
export const request={
    get:function(service){
        return axios.get(`${host}${service}`)


    }

}