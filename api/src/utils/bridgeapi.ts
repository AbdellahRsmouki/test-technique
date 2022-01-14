import axios from 'axios';
import {accountsResponse} from '../types/app-types'


var apiConnection = function () {

    var api:any = null;
    var config  = {} ;// : accountsResponse;
    async function apiConnect() {
        try {

            const adapter = axios.create({
                baseURL: "https://api.bridgeapi.io/v2",
                headers: {
                  Accept: 'application/json',
                  'Bridge-Version': '2021-06-01', //  ${process.env.BRIDGE_VERSION}
	              'Client-Id': 'MY_CLIENT_ID',
	              'Client-Secret': 'MY_CLIENT_SECRET',
                },
              });

              try {
                let data:any = await adapter.post(`/authenticate`,{
                    "email": "john.doe@email.com",
                    "password": "password123"                
                });
                // accountResponse = data.
                axios.defaults.headers.common['Authorization'] = data.access_token;
                // config =  { headers: {"Authorization" : `Bearer ${data.access_token}`} }
              } catch (err) {
                console.log(err);
              }

            return adapter
        } catch (e) {
            return e;
        }
    }

   async function adapter() {
        try {

            if (api != null) {
                // console.log(`db connection is already alive`);
                return api;
            } else {
                // console.log(`getting new db connection`);
                api = await apiConnect();
                return api; 
            }
        } catch (e) {
            return e;
        }
    }

    return {
        adapter: adapter
    }
}


module.exports = apiConnection();