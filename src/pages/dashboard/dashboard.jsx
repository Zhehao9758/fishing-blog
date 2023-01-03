import { Card, Col, Row } from 'antd';
import "./index.css"
import {useNavigate} from "react-router-dom";
const Dashboard=()=>{
    const card_width=8
    const bodystyle={height:80,padding:0,margin:0}
    const navigate=useNavigate()

    return(
        <div className="site-card-wrapper position">
            <Row gutter={200}>
                <Col span={card_width}>
                    <Card hoverable={true} onClick={()=>{navigate('/skills')}} bodyStyle={bodystyle} headStyle={{backgroundColor:"rgb(0, 118, 184)",height:140}} title=" " bordered={false}>
                        <h1 style={{color:"rgb(0, 118, 184)"}}>Fishing Skills</h1>
                        <div className='sub'>Learn how to catch all kinds of fishes and usages of all fishing gears.</div>
                    </Card>
                </Col>
                <Col span={card_width}>
                    <Card onClick={()=>{navigate('/catch')}} hoverable={true} bodyStyle={bodystyle} headStyle={{backgroundColor:"rgb(79, 128, 69)",height:140}} title=" " bordered={false}>
                        <h1 style={{color:"rgb(79, 128, 69)"}}>Catches Show</h1>
                        <div className='sub'>See others' catches and learn from their experiences.</div>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop:50}} gutter={200}>
                <Col span={card_width}>
                    <Card onClick={()=>{navigate('/shop')}} hoverable={true} bodyStyle={bodystyle} headStyle={{backgroundColor:"rgb(203, 63, 119)",height:140}} title=" " bordered={false}>
                        <h1 style={{color:"rgb(203, 63, 119)"}}>Fishing Gears Shop</h1>
                        <div className='sub'>Better equipments bring more catches. Look around and buy things you want.</div>
                    </Card>
                </Col>
                <Col span={card_width}>
                    <Card onClick={()=>{navigate('/community')}} hoverable={true} bodyStyle={bodystyle} headStyle={{backgroundColor:"rgb(77, 61, 77)",height:140}} title=" " bordered={false}>
                        <h1 style={{color:"rgb(77, 61, 77)"}}>Community</h1>
                        <div className='sub'>Join community and talk with other fishing lovers. Many ideas to sharing.</div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;