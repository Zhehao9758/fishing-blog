import request from "./req";
import axios from "axios";
export const reqLogin=(email,password)=>request('/login',{email,password},'POST')

export const reqRegister=(email,username,password)=>request('/register',{email,username,password},'POST')

export const reqFish= async ()=>{
    return await axios.get('https://devapi.qweather.com/v7/indices/1d?key=40611b879a4c47678f15c5c747db9d7e&lang=en&type=4&location=93AC7')
}


export const reqWeather=async ()=>{
    return await axios.get('https://devapi.qweather.com/v7/weather/now?key=40611b879a4c47678f15c5c747db9d7e&location=93AC7&lang=en')
}
