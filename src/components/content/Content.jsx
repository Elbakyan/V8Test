import React, {Component} from 'react';
import User from "../user/User";
import Score from "../score/Score";
import {connect} from "react-redux";
import LogScore from "../score/LogScore";

class  Content extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {linkU , linkS} = {linkU:'user',linkS:'score'}
        switch(linkS){
            case 'user':
                return (
                    <User/>
                    // <h1>sss</h1>
                )
            case 'score':
                return (
                    <LogScore />
                )
        }
    }
}
const MakeStateToProps = (state) => {
    return state.userLink
}
const MainContent = connect(MakeStateToProps)(Content)

export default MainContent;