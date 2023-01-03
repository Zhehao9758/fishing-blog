/*
header bar
 */

import {Component} from "react";
import './index.css'
import {reqWeather,reqFish} from "../../api";
import {useLocation} from "react-router-dom";

function myParams(Component) {
    return () => <Component locHook={useLocation()} />;
}
class Header extends Component{

    state={
        temp:0,
        windDir:'',
        windScale:0,
        pressure:0,
        text:'',
        fishText:'',
        title:'',
    }



    componentDidMount() {
        reqFish().then((data)=>{
            let text;
            switch (data.data.daily[0].level){
                case '1':
                    text='Today is a perfect fishing day. Cannot miss it!'
                    break
                case '2':
                    text='Today is a good fishing day. Why not go out?'
                    break
                case '3':
                    text='The weather today is not good. Maybe next time.'
                    break
            }
            this.setState({fishText:text})
        })

        reqWeather().then((data)=>{
            const weather=data.data.now
            this.setState({
                temp:weather.temp,
                windDir:weather.windDir,
                windScale:weather.windScale,
                pressure:weather.pressure,
                text:weather.text})
        })
    }
    getTitle=()=>{
        const title=this.props.locHook.pathname
        if(title==='/'){
            return 'Dashboard'
        }else {
            return title.slice(1).toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
        }
    }

    render() {
        const title=this.getTitle()
        return(
            <div className='header'>
                <div className='header-left'>
                    {title}
                </div>
                <div className='header-mid' >
                    {this.state.fishText}
                </div>
                <div className='header-right'>
                    {this.state.text}, {this.state.temp}℃, Wind: {this.state.windScale}({this.state.windDir}), Pressure: {this.state.pressure/1000}KPa
                </div>
            </div>
        )
    }

}

export default myParams(Header)