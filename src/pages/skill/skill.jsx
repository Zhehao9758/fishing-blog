import Fish_card from "../fish/fish_outer";
import {Card} from "antd";
import Fishing_methods from "../fish/fish_outer/fishing_methods";
const Skill=()=>{
    return(
        <div>
            <Card style={{
                paddingLeft:50,
            }}>
                <Fish_card />
                <Fishing_methods />
            </Card>
        </div>
    )
}

export default Skill;