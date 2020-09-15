import React,{Component} from 'react';
import  {Button,Modal} from "rsuite";
import {City, GetMyAuto, Model} from "../../redux/action/actions";
import {connect} from "react-redux";
import {POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import MyAuto from "./MyAuto";

const mark = [
    {
        id:1,
        name:'name'
    }
]

class UserAuto extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({
            show: false,

        });
    }
    open(size) {
        this.setState({
            size,
            show: true,

        });
    }
    componentDidMount() {
        this.props.dispatch(GetMyAuto(this.props.user.id))
    }

    AddAuto(e) {
        e.preventDefault();
        let data = new FormData(e.target)
        POST(Url.addauto,data).then(res => {
           if (res.status){
               document.location.reload(true)
           }
        })


    }
    render() {
        return(
            <div className="auto">
                <div className="auto__header">
                    <div className="auto__title">
                        {/*{this.props.auto.data.status?<h2>Ավտոմեքենաների ցանկ․․․</h2>: <h2>Դուք դեռ չունեք գրանցված ավտոմեենա․․․․</h2>}*/}

                    </div>
                    <div className="add_auto">
                        <Button color="violet" onClick={() => this.open('sm')}>Ավելացնել Ավտոմեենա․․․</Button>
                    </div>
                </div>
                    <div className="modal-container">
                        <Modal size={this.state.size} show={this.state.show} onHide={this.close}>
                            <Modal.Header>
                                <Modal.Title>Ավելացնել Ավտnմքենա․․․</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form className="add__auto-form" encType="multipart/form-data" onSubmit={this.AddAuto}>
                                        <div className="items">
                                            <label>Մոդել </label>
                                            <select name="mark" id="" onChange={(e)=> {
                                                this.props.dispatch(Model(e))
                                            }}>

                                                {mark.map(auto => {
                                                    return (
                                                        <option
                                                            key={auto.id}
                                                            id={auto.id}
                                                            value={auto.name}
                                                            data-id={auto.id}
                                                        >
                                                            {auto.name}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="items">
                                            <label >Մակնիշ</label>
                                            <select name="model" id="">
                                                {this.props.auto.model.map(auto => {
                                                    return (
                                                        <option
                                                            key={auto.id}
                                                            id={auto.id}
                                                            value={auto.name}
                                                        >
                                                            {auto.name}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="items">

                                            <label>Գույն </label>
                                            <select name="color" id="">
                                                {this.props.auto.color.map(color => {
                                                    return (
                                                        <option
                                                            key={color.color}
                                                            value={color.name}
                                                            style={{color:color.color,backgroundColor: '#101423'}}
                                                        >
                                                            {color.name}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="items">
                                            <label>Տարեթիվ</label>
                                            <select name="year" id="">
                                                {this.props.auto.year.map(year => {
                                                    return (
                                                        <option
                                                            key={year}
                                                            value={year}
                                                        >
                                                            {year}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="items">
                                            <label>Շարժիչի Ծավալ</label>
                                            <select name="engine" id="">
                                                {this.props.auto.engine.map(engine => {
                                                    return (
                                                        <option
                                                            key={engine}
                                                            value={engine}
                                                        >
                                                            {engine}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="items">
                                            <label>Պետհամարանիշ</label>
                                            <input type="text" placeholder="77AA777" name="auto_number"/>
                                        </div>
                                        <div className="items">
                                            <label>նույնականացման Համար</label>
                                            <input type="text" placeholder="V28-45589875" name="vin"/>
                                        </div>
                                        <div className="items">
                                            <label>Լուսանկար</label>
                                            <input type="file" name="user_img"/>
                                        </div>
                                            <input type="hidden" name="user_id" value={this.props.user.id}/>
                                       <div className="items ">
                                           <Button type="submit" color="violet">Ավելացնել</Button>

                                       </div>
                                </form>
                            </Modal.Body>
                        </Modal>

                    </div>
                {this.props.auto.data.status?<MyAuto />: ''}

            </div>
        )
    }
}
const MakeStateToProps = (state) => {
    return state
}
const MainUserAuto = connect(MakeStateToProps)(UserAuto)

export default  MainUserAuto;