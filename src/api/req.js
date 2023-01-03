import axios from "axios";
import {message} from "antd";

export default function request(url,data={},type='GET'){
    url='http://localhost:4000'+url
    return new Promise((resolve, reject)=>{
        let promise
        if(type==='GET'){
            promise=axios.get(url,{params:data})
        }else{
            promise=axios.post(url,data)
        }
        promise.then(response=>{
            resolve(response.data)
        }).catch(error=>{
            message.error(error.message)
        })
    })
}

