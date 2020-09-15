import React, {Component} from "react";
import Score from "./Score";
import RegScore from "./RegScore";
import {connect} from "react-redux";
import {ScoreAction} from "../../redux/action/actions";


class LogScore extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(ScoreAction(this.props.user.id))
    }
    render() {
        console.log(this.props)
        const {statusT,statusF} = {statusT:true,statusF:false}
        if(statusT){
            return(
                <Score />
            )
        }else{
            return (
                <RegScore />
            )
        }

    }
}


const MakeStateToProps = (state) => {
    return state;
}
const MainLogScore = connect(MakeStateToProps)(LogScore)

export default MainLogScore;