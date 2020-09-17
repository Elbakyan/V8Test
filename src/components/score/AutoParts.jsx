import React, {Component} from "react";
import {connect} from "react-redux";
import { Table,Button, CheckPicker} from 'rsuite';
import  Arr from './arr';
import  ProductList from './productList'
let data = [
    {
        "label": "Eugenia",
        "value": "Eugenia",

    },
    {
        "label": "Kariane",
        "value": "Kariane",

    },
    {
        "label": "Karianesas",
        "value": "Karianesas",

    },
    {
        "label": "Karianea",
        "value": "Karianes",

    },
    {
        "label": "Karianea",
        "value": "Karianes",

    },
    {
        "label": "Karianea",
        "value": "Karianes",

    },
    {
        "label": "Karianea",
        "value": "Karianes",

    },



]



const { Column, HeaderCell, Cell, Pagination } = Table;
class AutoParts extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Arr
        };
    }
    Add_Score(e){
        e.preventDefault()
        let list = e.target.querySelector('.rs-picker-value-list');
        let data = new FormData(e.target)

        if (list != null){
            let lists = list.title.split(',');
            data.append('models', lists)
        }


    }
    Show(e){
        let descroption = document.querySelector('.descroption');
        if (e.target.checked){
            descroption.style =  `
                display: block;
                transform: scale(1);
            `;
        }else{
            descroption.style =  `
                display: none;
                transform: scale(0);
            `;
        }
    }
    render() {
    let i = 1;
        return(
            <div className="auto_parts">
                <div className="auto_parts">
                    <form onSubmit={this.Add_Score} encType="multipart/form-data">
                        <div className="add_auto_container">
                            <select name="mark" id="">
                                <option>Mercedes</option>
                            </select>
                            <CheckPicker placeholder="Մոդել" data={data}style={{ width: 150 }} />
                            <div className="state">
                                <label className='state_label'>
                                    Նոր
                                    <input type="checkbox" name="new" value="Նոր"/>
                                </label>
                                <label className='state_label'>
                                    Օգտագործած
                                    <input type="checkbox" name="used" value="Օգտագործած" onChange={this.Show}/>
                                </label>
                                <label className='state_label'>
                                    Պատվերով
                                    <input type="checkbox" name="order" value="Պատվերով"/>
                                </label>
                                <label className="file">
                                    <input type="file" className="IMG" multiple/>
                                </label>
                            </div>


                            <textarea name="text" id="" placeholder="Նկարրագրություն․․․" className="descroption"></textarea>
                            <div className="add_auto_btn">
                                <Button type="submit" color="violet">Ավելացնել ավտոմեքենա․․․</Button>
                            </div>
                        </div>
                    </form>
                    <ProductList/>
                </div>

            </div>
        )
    }
}

export default AutoParts;