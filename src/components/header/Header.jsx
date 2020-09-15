import React, {Component} from 'react';
import 'rsuite/lib/styles/themes/default/index.less';
import './Header.scss';
import {userExist} from "../../redux/action/actions";
import {connect} from "react-redux";
import { Loader } from 'rsuite';
import AppHeader from "./AppHeader";
import UserHeader from "./UserHeader";

const test = true

class Header extends Component {
    constructor(props) {
        super(props);


    }
    componentDidMount() {
        const dispach = this.props.dispatch;
        dispach(userExist())
    }

    // this.props.user.status

    render() {
        const {statusT,statusF} = {statusT:true,statusF:false,}
        switch (statusT){
            case undefined:
                return ( <Loader size="lg" backdrop content="loading..." vertical /> )
            break;
            case false:
                return ( <AppHeader/> )
            break;
            case true:
                return ( <UserHeader/> )
        }
    }

}

const MakeStateToProps = (state) => {
    return state
}
const MainHeader = connect(MakeStateToProps)(Header)
export default MainHeader;