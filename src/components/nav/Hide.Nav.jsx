import React, {Component} from 'react';
import "./Hide.Nav.scss"


 class HideNav extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <ul className="Hide_Nav" style={{width:this.props.width}}>
                {this.props.value.map(object => {
                    return (
                        <li key={object.id}>
                            {object.hasOwnProperty('img')? <img src={object.img} alt=""/>: ''}
                            <a href="">{object.name}</a>
                        </li>)
                })}
            </ul>
        )
    }
}

export default HideNav;