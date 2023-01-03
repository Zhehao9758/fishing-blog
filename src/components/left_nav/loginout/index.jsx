import memoryUtils from "../../../utils/memoryUtils";
import "./index.css"
import {Modal} from "antd";
import {ExclamationCircleFilled} from "@ant-design/icons";
import storeUtils from "../../../utils/storeUtils";
import {Navigate} from "react-router-dom";
import useForceUpdate from "antd/es/_util/hooks/useForceUpdate";

const Loginout=()=>{
    const user=memoryUtils.user
    const update=useForceUpdate()
    const logOut=()=>{
        Modal.confirm({
            title: 'Do you want to log out ?',
            icon: <ExclamationCircleFilled />,
            onOk() {
                storeUtils.removeUser()
                memoryUtils.user={}
                update()
            },
            onCancel() {
            },
        })
    }
    if(user && user._id){
        return (
            <div style={{paddingTop:25}}>
                <header className='button'>Hello, {user.username}</header>
                <a onClick={logOut} className='button'>Log out</a>
            </div>
        )
    }else{
        return <a href='/login' className='button'>Login</a>
    }
}

export default Loginout