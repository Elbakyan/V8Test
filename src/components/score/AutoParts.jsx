import React, {Component} from "react";
import {connect} from "react-redux";
import { Table,Button, } from 'rsuite';
import  Arr from './arr';


const { Column, HeaderCell, Cell, Pagination } = Table;
class AutoParts extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Arr
        };
    }

    render() {
        return(
            <div className="auto_parts">
                <h1>Hello</h1>
            </div>
        )
    }
}

export default AutoParts;