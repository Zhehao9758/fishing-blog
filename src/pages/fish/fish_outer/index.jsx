import {Card, Col, Row} from "antd";
import goldfish from './goldfish.jpg'
import grass from './grass.jpg'
import silver from './silver.jpg'
import siliporca from './siniperca.jfif'
const Fish_card=()=>{

    const fish_pic={
        width:272,
        height:160,
        position:'relative',
        left:0,
        margin:0,
        padding:0
    }
    const span1=6


    return(
            <Card
                title="Fish Information"
                extra={<a href="#">More</a>}
                style={{
                    width: 1200,
                }}
            >
                <Row gutter={16}>
                    <Col span={span1}>
                        <Card hoverable={true} title="Goldfish" bodyStyle={{padding:0}} bordered={true}>
                            <img src={goldfish} style={fish_pic}></img>
                        </Card>
                    </Col>
                    <Col span={span1}>
                        <Card hoverable={true} title="Grass carp" bodyStyle={{padding:0}} bordered={true}>
                            <img src={grass} style={fish_pic}></img>
                        </Card>
                    </Col>
                    <Col span={span1}>
                        <Card hoverable={true} title="Silver carp" bodyStyle={{padding:0}} bordered={true}>
                            <img src={silver} style={fish_pic}></img>
                        </Card>
                    </Col>
                    <Col span={span1}>
                        <Card hoverable={true} title="Siniperca chuatsi" bodyStyle={{padding:0}} bordered={true}>
                            <img src={siliporca} style={fish_pic}></img>
                        </Card>
                    </Col>
                </Row>
            </Card>
    )
}
export default Fish_card