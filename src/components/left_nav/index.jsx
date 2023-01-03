/*
left navi bar
 */

import './index.css';
import logo from './logo.png'
import {Link, useNavigate} from "react-router-dom";
import {Menu, Modal} from "antd";
import account from './icon/account.png'
import dashboard from './icon/dashboard.png'
import skill from './icon/skill.png'
import show from './icon/show.png'
import shop from './icon/shop.png'
import community from './icon/community.png'
import Loginout from "./loginout";

const LeftNav=()=>{

    const navigate=useNavigate();
    const onClick = (e) => {
        const key=e.key
        switch (key){
            case '1':
                navigate('/account')
                break
            case '2':
                navigate('/')
                break
            case '3':
                navigate('/skills')
                break
            case '4':
                navigate('/catch')
                break
            case '5':
                navigate('/shop')
                break
            case '6':
                navigate('/community')
                break
            default:
        }
    };


        return(
            <div className="left_nav">
            <Link to='/' >
                <header style={{
                    borderBottom:'solid',borderRight:'none',borderWidth:4,borderColor:'white'
                }}
                >
                    <img src={logo} height="140" className="center" width="140"></img>
                </header>
            </Link>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 180,paddingTop:40,paddingBottom:60,backgroundColor:'#e6f4ff',
                        borderBottom:'solid',borderRight:'none',borderWidth:4,borderColor:'white'
                    }}

                    theme='light'
                    mode="inline">
                    <Menu.Item key='1'>
                        <img src={account} className='icon'></img>
                        <span className='menu-font'>Account</span>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <img src={dashboard} className='icon'></img>
                        <span className='menu-font'>Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <img src={skill} className='icon'></img>
                        <span className='menu-font'>Skills</span>
                    </Menu.Item>
                    <Menu.Item key='4'>
                        <img src={show} className='icon'></img>
                        <span className='menu-font'>Catch Show</span>
                    </Menu.Item>
                    <Menu.Item key='5'>
                        <img src={shop} className='icon'></img>
                        <span className='menu-font'>Shop</span>
                    </Menu.Item>
                    <Menu.Item key='6'>
                        <img src={community} className='icon'></img>
                        <span className='menu-font'>Community</span>
                    </Menu.Item>
                </Menu>
                <div>
                    <Loginout/>
                </div>
                </div>
        )
}

export default LeftNav