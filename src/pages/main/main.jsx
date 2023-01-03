import {Component} from "react";
import { Layout } from 'antd';
import './main.css'
import LeftNav from "../../components/left_nav";
import Header from "../../components/Header";
import Account from "../account/account";
import Dashboard from "../dashboard/dashboard";
import Catch from "../catch/catch";
import Skill from "../skill/skill";
import Community from "../community/community";
import Shop from "../shop/shop"
import Error from "../error/error"
import { Route, Routes} from "react-router-dom";

const { Sider, Content } = Layout;




export default class Main extends Component{

    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Sider className='left' width='180px'>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{backgroundColor:"white"}}>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/account" element={<Account />} />
                            <Route path="/skills" element={<Skill />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/catch" element={<Catch />} />
                            <Route path="/community" element={<Community />} />
                            <Route path='*' element={<Error />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}