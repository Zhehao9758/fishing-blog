import {Card, Col, Row} from "antd";

const Fish_methods=()=>{

    const fish_pic={
        width:273.5,
        height:145.2,
        position:'relative',
        left:0,
        margin:0,
        padding:0
    }
    const span1=6

    return(
        <Card
            title="Fish Methods"
            extra={<a href="#">More</a>}
            style={{
                width: 1200,marginTop:50
            }}
        >
            <Row gutter={16}>
                <Col span={span1}>
                    <a href='#'>Traditional Fishing</a>
                </Col>
                <Col span={span1}>
                    <a href='#'>Float Fishing</a>
                </Col>
                <Col span={span1}>
                    <a href='#'>Lure Fishing</a>
                </Col>
                <Col span={span1}>
                    <a href='#'>Sea Fishing</a>
                </Col>
            </Row>
        </Card>
    )
}
export default Fish_methods