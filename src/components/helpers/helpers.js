import axios from 'axios'
import {APIHOST as host} from'../../app.json'
export const request={
    get:function(service){
        return axios.get(`${host}${service}`)


    },
    post:function(service,data){
        return axios.post(`${host}${service}`,data)


    },

}