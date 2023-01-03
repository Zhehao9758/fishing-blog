import {Component, createRef, useEffect} from "react";
import './login.css'
import {Form, Input, message} from "antd";
import {reqLogin,reqRegister} from "../../api";
import {Navigate, useNavigate} from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
import storeUtils from "../../utils/storeUtils";
// login

function myParams(Component) {
    return () => <Component navHook={useNavigate()} />;
}
class Login extends Component{

    constructor(props) {
        super(props);
        this.state1='in'
        this.upform=createRef();
        this.inform=createRef();
    }


    onFinish = async (values) => {
        if (this.state1 === 'in') {
            const {email, password} = values
            const response = await reqLogin(email, password)
            if(response.code===0){
                memoryUtils.user=response.user  // to memory
                storeUtils.saveUser(response.user)   // to disk
                this.inform.current.resetFields()
                this.props.navHook('/')
            }else{
                message.error(response.msg)
            }
        } else {
            const {r_email, r_username, r_password} = values
            const response = await reqRegister(r_email, r_username, r_password)
            if(response.code===0){
                //jump with replace rather than push because no need to go back
                message.success('register success')
                this.login()
            }else{
                message.error(response.msg)
            }
        }
    }

    register=()=>{
        document.getElementById('login-box').classList.add('right-panel-active')
        this.state1='up'
        this.upform.current.resetFields();
    }

    login=()=>{
        document.getElementById('login-box').classList.remove('right-panel-active')
        this.state1='in'
        this.inform.current.resetFields();
    }



    render()
    {
        const user=memoryUtils.user
        if(user && user._id){
            return <Navigate to='/' />
        }
        return (
            //register
            <div className="container" id="login-box">
                <div className="form-container sign-up-container">
                    <Form ref={this.upform} onFinish={this.onFinish}>
                        <h1>Sign up</h1>
                        <Form.Item name='r_username' lable="Username" rules={
                            [{required:true, message:'Please input your username'},
                                {min:4, message:'Length of username must longer than 4'},
                                {max:10, message:'Length of username must less than 10'},
                                {pattern:/^[a-zA-Z0-9_]+$/, message:'Invalid character'}]
                        }hasFeedback>
                            <Input placeholder="Username"/>
                        </Form.Item>
                        <Form.Item name='r_email' lable="Email" rules={
                            [{required:true, message:'Please input your email'},
                                {type:'email', message:'Please input valid email'}]

                        }hasFeedback>
                            <Input placeholder="Email"/>
                        </Form.Item>
                        <Form.Item name='r_password' lable="Password" rules={
                            [{required:true, message:'Please input your password'},
                                {min:6, message:'Password too short'}]

                        }hasFeedback>
                            <Input.Password placeholder="Password"/>
                        </Form.Item>
                        <Form.Item name='r_c_password' lable="Password" dependencies={['r_password']} rules={
                            [{required:true, message:'Please confirm your password'},
                                ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('r_password') === value) {
                            return Promise.resolve();
                        }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                        }),]

                        }hasFeedback>
                            <Input.Password placeholder="Confirm Password"/>
                        </Form.Item>
                        <button>continue</button>
                    </Form>
                </div>


                <div className="form-container sign-in-container">
                    <Form ref={this.inform} onFinish={this.onFinish}>
                        <h1>Sign in</h1>
                        <Form.Item name="email" initialValue='' lable="Email" rules={
                            [   {required:true, message:'Please input your email'},
                                {type:'email', message:'Please input valid email'}]

                        }hasFeedback>
                            <Input placeholder="Email"/>

                        </Form.Item>
                        <Form.Item name="password" initialValue='' lable="Password" rules={
                            [{required:true,message:'Please input your password'}]
                        } hasFeedback>
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <a href="#">Forgot password?</a>
                        </Form.Item>
                        <Form.Item>
                            <button type="primary">continue</button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h2>Already have an account？</h2>
                            <button onClick={this.login} className="ghost" id="signIn">Sign in</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h2>Don't have an account?</h2>
                            <button onClick={this.register} className="ghost" id="signUp">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default myParams(Login)