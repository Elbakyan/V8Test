import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar, Modal} from "rsuite";
import './Login.scss';
import {Url}from '../config/Url'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            overflow: true
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ show: false });
    }
    open(event) {
        this.setState({ show: true });
    }

    render() {
        const { overflow, show } = this.state;

        return (
            <div className="modal-container">
                <ButtonToolbar>
                    <Button color="violet" onClick={this.open}>Մուտք</Button>
                </ButtonToolbar>

                <Modal overflow={overflow} show={show} onHide={this.close}>
                    <Modal.Header>
                        <Modal.Title>Գրեք ձեր մուտքին տվյալները․․․</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="sotial">
                            <a href="" className='google'></a>
                            <a href="" className='facebook'></a>
                        </div>
                        <form action={Url.login} method="POST">
                            <label className="phone">
                                <input
                                    required
                                    type="number"
                                    name="phone"
                                    placeholder="Հեռախոսահամար․․․"
                                />
                            </label>
                            <label className="password">
                                <input type="password" name="password" placeholder="Գախտնաբառ․․․" />

                            </label>
                            <Button color="violet" type="submit">Մուտք</Button>
                        </form>
                    </Modal.Body>
                </Modal>

            </div>

        )

    }
}
