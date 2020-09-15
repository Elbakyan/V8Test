import React,{Component} from "react";
import './MyAuto.scss';
import {Button, Loader} from "rsuite";
import {connect} from "react-redux";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";


class MyAuto extends Component {
    constructor(props) {
        super(props);
    }
    deliteAuto(e) {
        let data = new FormData();
        data.append('id', e.target.id)
        data.append('user',e.target.dataset.user)
        data.append('vin',e.target.dataset.vin)

        POST(Url.DeleteUserAuto,data).then(res=>{
            // console.log(res)
        })
        document.location.reload(true)
    }
    render() {
            const map = [
                {
                    id:1,
                    model:'bmw',
                    color:'blue',
                    year:1111,
                    auto_number:455,
                    engine_power:1.5,
                    vin:'54sd4s5',
                    img:''
                }
            ]
        return (

                    <div className="my_auto">

                        {
                            map(({
                                                                id,
                                                               model,
                                                               color,
                                                               year,
                                                               auto_number,
                                                               engine_power,
                                                               vin,
                                                               img
                                                           }) => (
                                <div className="my_auto_block" style={{boxShadow: `0px 0px 5px 1px #575757`}}>
                                    <div className="my_auto_image">
                                        <img src={img} alt=""/>
                                    </div>
                                    <div className="my_auto_info">
                                        <h3>{model}</h3>
                                        <nav>
                                            <ul>
                                                <li>
                                                    <span>Գույն</span>
                                                    :
                                                    <span>{color}</span>
                                                </li>
                                                <li>
                                                    <span>Տարեթիվ</span>
                                                    :
                                                    <span>{year}</span>
                                                </li>
                                                <li>
                                                    <span>Պետհամարանիշ</span>
                                                    :
                                                    <span>{auto_number}</span>
                                                </li>
                                                <li>
                                                    <span>Շարժիչի Ծավալը</span>
                                                    :
                                                    <span>{engine_power}</span>
                                                </li>
                                                <li>
                                                    <span>VIN</span>
                                                    :
                                                    <span>{vin}</span>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="my_auto_button">
                                            <Button id={id} color={"red"} onClick={this.deliteAuto}>Հեռացնել</Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )

            }


}
const MakeStateToProps = (state) => {
    return state
}
const MainMyAuto = connect(MakeStateToProps)(MyAuto)

export default MainMyAuto;

