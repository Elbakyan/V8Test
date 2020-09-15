import React, {Component} from "react";
import {connect} from "react-redux";
import { Table,Button, CheckPicker} from 'rsuite';
import  Arr from './arr';
<<<<<<< HEAD
import  ProductList from './productList'
=======
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

]

>>>>>>> 7dc92e87e6151a62a6057a8f675b88b2ed743635

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
        console.log(Array.from(data))


    }
    render() {

        return(
            <div className="auto_parts">
                <div className="auto_parts">
                    <form onSubmit={this.Add_Score}>
                        <div className="add_auto_container">
                            <select name="mark" id="">
                                <option>Mercedes</option>
                            </select>
                            <CheckPicker placeholder="Մոդել" data={data} style={{ width: 224 }} />
                            <select name="state" id="" >
                                <option value="new">Նոր</option>
                                <option value="used">Օգտագործած</option>
                            </select>
                            <label>
                                Պատվերով
                                <input type="checkbox" name="order" value="Պատվերով"/>
                            </label>
                            <label className="file">
                                <input type="file" name="img" multiple/>
                            </label>

                            <textarea name="text" id="" placeholder="Նկարրագրություն․․․"></textarea>
                            <div className="add_auto_btn">
                                <Button type="submit" color="violet">Ավելացնել ավտոմեքենա․․․</Button>
                            </div>
                        </div>
<<<<<<< HEAD
                        <textarea name="" id="" placeholder="Նկարրագրություն․․․"></textarea>
                        <div className="add_auto_btn">
                            <Button color="violet">Ավելացնել ավտոմեքենա․․․</Button>
                        </div>


                    </div>

                    <ProductList />
=======
                    </form>
>>>>>>> 7dc92e87e6151a62a6057a8f675b88b2ed743635
                </div>

            </div>
        )
    }
}

export default AutoParts;