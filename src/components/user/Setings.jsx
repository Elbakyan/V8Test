import React, {Component} from 'react';
import {Url} from '../config/Url'
import {Button, ButtonToolbar, Modal} from "rsuite";
import {connect} from "react-redux";
import {POST,TEST_POST} from "../config/Requsest";
import {City, userExist} from "../../redux/action/actions";
import Alert from "rsuite/es/Alert";


 class Setings extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }

     updateUserData = (e) => {
         e.preventDefault()
         let data = new FormData(e.target);
         POST(Url.UserUpdate,data).then(res => {
             if (res.status == true) {

                 Alert.success(res.message)
                 this.props.close()
                 setTimeout(() => {
                     document.location.reload(true)
                 },1000)
             }else{
                 Alert.error(res.message)
             }

         })

         this.props.dispatch(userExist())



     }
     render() {
        const { overflow, show } = this.props.state;
        return (
            <div className="modal-container">
                <Modal overflow={overflow} show={show} onHide={this.props.close}>
                    <Modal.Header>
                        <Modal.Title>Կարգավորումներ․․․</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="Setings" style={{height:'450px'}}>
                            <form onSubmit={this.updateUserData} encType="multipart/form-data">
                                <div>
                                    <label className="fullname">
                                        <input
                                            required
                                            id="name"
                                            type="text"
                                            name="name"
                                            // defaultValue={this.props.user.data.name}
                                        />
                                    </label>
                                    <div className="margin"></div>
                                    <label className="fullname">
                                        <input
                                            required
                                            type="text"
                                            name="surname"
                                            // defaultValue={this.props.user.data.surname}
                                        />
                                    </label>
                                </div>
                                <label className="phone">
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        pattern="[0-9]{11}"
                                        // defaultValue={this.props.user.data.phone}
                                    />
                                </label>
                                <label className="email">
                                    {/*<input required type="email" name="email" defaultValue={this.props.user.data.email} />*/}
                                </label>
                                <div>
                                    <label className="password">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Նոր Գաղտնաբառ․․․"
                                        />
                                    </label>
                                    <div className="margin"></div>
                                    <label className="password">
                                        <input

                                            type="password"
                                            name="password2"
                                            placeholder="Կրկնել Գաղտնաբառը․․․"

                                        />
                                    </label>
                                </div>

                                <label className="img">
                                    <input type="file" name="avatar"/>
                                </label>
                                {/*<input type="hidden" name='id' value={this.props.user.id}/>*/}
                                {/*<input type="hidden" name='img' value={this.props.user.data.img}/>*/}
                                <Button color="violet" type="submit" style={{marginTop: ''}}>Հաստատել</Button>
                            </form>
                        </div>
                    </Modal.Body>

                </Modal>

            </div>

        )

    }
}
const MakeStateToProps = (state) => {
    return state
}
const MainSetings = connect(MakeStateToProps)(Setings)
export default MainSetings;