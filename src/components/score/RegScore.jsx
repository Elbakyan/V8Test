import React, {Component} from "react";
import {connect} from "react-redux";
import './Score.scss'
import {City} from "../../redux/action/actions";
import {Button, ButtonToolbar, Modal} from "rsuite";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {
//     faAt, faCarAlt, faCity,
//     faClipboard,
//     faCog,
//     faEnvelope,
//     faMapMarkedAlt,
//     faPhoneAlt,
//     faTags
// } from "@fortawesome/free-solid-svg-icons";
import AutoParts from "./AutoParts";
import {POST} from "../config/Requsest";

// import {Button} from "rsuite";


class RegScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            overflow: true,
            message: ''
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }


    close() {
        this.setState({show: false});
    }

    open(event) {
        this.setState({show: true});
    }

    render() {
        const {overflow, show} = this.state;
        return (
            <div className="container">
                <section className="score_container">
                    <div className='info_for_user'>
                        <h1>Դառնալ գործընկեր</h1>
                    </div>

                    <div className="score_reg">
                        <div className="modal-container">
                            <ButtonToolbar>
                                <Button color="violet" onClick={this.open}>Գրանցվել</Button>
                            </ButtonToolbar>

                            <Modal overflow={overflow} show={show} onHide={this.close}>
                                <Modal.Header>
                                    <Modal.Title>Գրեք ձեր վաճառքի սրահի գրանցման տվյալները․․․</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="reg_score">
                                        <h2>{this.state.message}</h2>
                                        <form onSubmit={this.SendUserData}>
                                            <div>
                                                <label className="name">
                                                    <input
                                                        required
                                                        id="name"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Անվանում․․․"
                                                    />
                                                </label>
                                            </div>
                                            <label className="phone">
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    pattern="[0-9]{11}"
                                                    placeholder="37494444444"
                                                />
                                            </label>
                                            <label className="email">
                                                <input required type="email" name="email" placeholder="E-mail..."/>
                                            </label>
                                            <label className="phone">
                                                <input
                                                    required
                                                    type="url"
                                                    name="address"
                                                    placeholder="Կայք․․․"
                                                />
                                            </label>
                                            <div>
                                                <label className="location">
                                                    <select
                                                        name="sircle"
                                                        id=""
                                                        onChange={(e) => {
                                                            this.props.dispatch(City(e))
                                                        }}
                                                    >

                                                        {this.props.location.sircle.map((data, id) => {
                                                            return (
                                                                <option
                                                                    key={data.id}
                                                                    id={data.id}
                                                                    value={data.name}
                                                                    data-id={data.id}
                                                                >
                                                                    {data.name}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                </label>
                                                <div className="margin"></div>
                                                <label className="location">
                                                    <select name="city">
                                                        {this.props.location.city.map((data, id) => {
                                                            return (
                                                                <option value={data.name} key={id}>
                                                                    {data.name}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                </label>
                                            </div>
                                            <label className="phone">
                                                <input
                                                    required
                                                    type="text"
                                                    name="address"
                                                    placeholder="Հասցե․․․"
                                                />
                                            </label>
                                            <label>
                                                <input  type="file" name="user_img"/>
                                            </label>
                                            <Button color="violet" type="submit">Գրանցել</Button>
                                        </form>
                                    </div>
                                </Modal.Body>
                            </Modal>

                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

const MakeStateToProps = (state) => {
    return state
}
const MainRegScore = connect(MakeStateToProps)(RegScore)

export default MainRegScore;