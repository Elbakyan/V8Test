import React,{Component} from 'react';
import logo from "../../img/logo_1.svg";
import {Button,Avatar,Badge,Icon} from "rsuite";
import {Url}from '../config/Url';
import HideNav from "../nav/Hide.Nav";
import {connect} from "react-redux";
import {Link} from '../../redux/action/linkAction'

class UserHeader extends  Component{

    render() {
        return(
            <header>
                <div className="container row header_container">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt=""/>
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a href='/'>Գլխավեր</a>
                            </li>
                            <li>
                                <a href="#">Պահեստամասեր</a>
                                <HideNav value={this.props.auto.mark} width="250px"/>
                            </li>
                            <li>
                                <a href="#">Ծառայություններ</a>
                                <HideNav value={this.props.services.services} width="350px"/>
                            </li>
                            <li>
                                <a data-name='score' onClick={(e)=>{
                                    this.props.dispatch(Link(e.target.dataset.name))
                                }} href="#">Խանութը</a>
                            </li>
                        </ul>
                    </nav>

                    <a href={Url.logout}>
                        <Button color="violet" style={{padding: "5px 20px"}}>Ելք</Button>
                    </a>
                </div>

            </header>
        )
    }
}
const MakeStateToProps = (state) => {
    return state
}
const MainUserHeader = connect(MakeStateToProps)(UserHeader)

export default MainUserHeader;
