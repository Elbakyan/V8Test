import React, {Component} from "react";
import {connect} from "react-redux";
import { Table,Button, } from 'rsuite';
import  Arr from './arr';
import  ProductList from './productList'

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
                <div className="auto_parts">
                    <div className="add_auto_container">
                        <div className="add_auto_controls">
                            <select name="mark" id="">
                                <option>Mercedes</option>
                            </select>
                            <select name="model" id="">
                                <option>Mercedes E-class</option>
                            </select>
                            <select name="state" id="" >
                                <option>Նոր</option>
                                <option>Օգտագործած</option>
                            </select>
                            <label>
                                Պատվերով
                                <input type="checkbox"/>
                            </label>



                        </div>
                        <textarea name="" id="" placeholder="Նկարրագրություն․․․"></textarea>
                        <div className="add_auto_btn">
                            <Button color="violet">Ավելացնել ավտոմեքենա․․․</Button>
                        </div>


                    </div>

                    <ProductList />
                </div>

            </div>
        )
    }
}

export default AutoParts;