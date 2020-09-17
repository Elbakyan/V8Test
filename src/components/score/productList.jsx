import React, {Component} from "react";
import {Button} from "rsuite";
import  './productList.scss';
import { Modal } from 'rsuite';

const autoList = [
    {
        id:1,
        nor:'Նոր',
        model:'BMW',
        mark:'M6',
        pat:'Պատվերով',
        img:[
            'https://mediapool.bmwgroup.com/cache/P9/201411/P90169552/P90169552-the-new-bmw-m6-coup-exterior-12-2014-2250px.jpg',
            'https://vse-pro-bmw.info/wp-content/uploads/2019/12/obzor-bmw-m6-f13-2.jpg',
            'https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/topics/fascination-bmw/all-news/2016/02-02/2.jpg',
            'https://a.d-cd.net/bCAAAgP4LuA-960.jpg',
            'https://s.aolcdn.com/commerce/autodata/images/USC60BMC531A021001.jpg'

        ],
        note:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aut, consectetur corporis, eius excepturi illum ipsam laboriosam necessitatibus numquam obcaecati odit omnis praesentium quo temporibus unde vitae, voluptas voluptate!',
    },
    {
        id:2,
        nor:'Նոր',
        model:'BMW',
        mark:'M6',
        img:[
            'https://mediapool.bmwgroup.com/cache/P9/201411/P90169552/P90169552-the-new-bmw-m6-coup-exterior-12-2014-2250px.jpg',
            'https://vse-pro-bmw.info/wp-content/uploads/2019/12/obzor-bmw-m6-f13-2.jpg',
            'https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/topics/fascination-bmw/all-news/2016/02-02/2.jpg',
            'https://a.d-cd.net/bCAAAgP4LuA-960.jpg',
            'https://s.aolcdn.com/commerce/autodata/images/USC60BMC531A021001.jpg'
        ],
        note:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aut, consectetur corporis, eius excepturi illum ipsam laboriosam necessitatibus numquam obcaecati odit omnis praesentium quo temporibus unde vitae, voluptas voluptate!',
    },
    {
        id:3,
        nor:'Նոր',
        model:'BMW',
        mark:'M6',
        img:[
            'https://mediapool.bmwgroup.com/cache/P9/201411/P90169552/P90169552-the-new-bmw-m6-coup-exterior-12-2014-2250px.jpg',
            'https://vse-pro-bmw.info/wp-content/uploads/2019/12/obzor-bmw-m6-f13-2.jpg',
            'https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/topics/fascination-bmw/all-news/2016/02-02/2.jpg',
            'https://a.d-cd.net/bCAAAgP4LuA-960.jpg',
            'https://s.aolcdn.com/commerce/autodata/images/USC60BMC531A021001.jpg'
        ],
        note:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aut, consectetur corporis, eius excepturi illum ipsam laboriosam necessitatibus numquam obcaecati odit omnis praesentium quo temporibus unde vitae, voluptas voluptate!',
    },
    {
        id:4,
        nor:'Հին',
        model:'BMW',
        mark:'M6',
        pat:'Պատվերով',
        img:[
            'https://mediapool.bmwgroup.com/cache/P9/201411/P90169552/P90169552-the-new-bmw-m6-coup-exterior-12-2014-2250px.jpg',
            'https://vse-pro-bmw.info/wp-content/uploads/2019/12/obzor-bmw-m6-f13-2.jpg',
            'https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/topics/fascination-bmw/all-news/2016/02-02/2.jpg',
            'https://a.d-cd.net/bCAAAgP4LuA-960.jpg',
            'https://s.aolcdn.com/commerce/autodata/images/USC60BMC531A021001.jpg'

        ],
        note:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aut, consectetur corporis, eius excepturi illum ipsam laboriosam necessitatibus numquam obcaecati odit omnis praesentium quo temporibus unde vitae, voluptas voluptate!',
    },
]

class PorductList extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    componentDidMount() {
        this.ShowClose()
    }
    close() {
        this.setState({ show: false });
    }
    open() {
        this.setState({ show: true });
        console.log(this)
    }

    ShowClose(){
        let open = this.open;
        let mark = document.querySelectorAll('.mark_container');

        mark.forEach(auto => {
            auto.addEventListener('click',ClickMark)
        })
        function ClickMark(e){

            this.childNodes.forEach(child => {
                if (child.nodeName != '#text'){
                    if (child.className != 'mark'){
                        child.classList.toggle('show')
                        child.addEventListener('click', (e) => {
                            open();
                            e.stopPropagation();
                        });
                        let span = child.parentElement.querySelector('.state')
                        if (span.textContent == '+'){
                            span.textContent = '-'
                        }else{
                            span.textContent = '+'
                        }

                    }

                }
            })
        }
    }
    render() {

        return (

            <div className="product_list">
                <div className="modal-container">
                    <Modal show={this.state.show} onHide={this.close} size='lg'>
                        <Modal.Header>
                            <Modal.Title>ՀԱՏՒԿ ՆՇՈՒՄՆԵՐ․․․</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal_container">
                                <div className="modal_img">
                                   <div className="img">
                                       <img src="https://auto.am/static/offers/2497150/s-13f83abd47e7d6f19d5fdfce80b33810.jpg" alt=""/>
                                   </div><div className="img">
                                       <img src="https://auto.am/static/offers/2497150/s-13f83abd47e7d6f19d5fdfce80b33810.jpg" alt=""/>
                                   </div><div className="img">
                                       <img src="https://auto.am/static/offers/2497150/s-13f83abd47e7d6f19d5fdfce80b33810.jpg" alt=""/>
                                   </div><div className="img">
                                       <img src="https://auto.am/static/offers/2497150/s-13f83abd47e7d6f19d5fdfce80b33810.jpg" alt=""/>
                                   </div><div className="img">
                                       <img src="https://auto.am/static/offers/2497150/s-13f83abd47e7d6f19d5fdfce80b33810.jpg" alt=""/>
                                   </div>
                                </div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus
                                    eveniet, exercitationem maiores qui reprehenderit. Aliquam assumenda commodi earum
                                    eius ex facilis itaque minima, molestiae possimus qui quis sed, voluptas?

                               Corporis ducimus itaque quidem voluptatem. Accusamus alias architecto, at autem
                                    corporis culpa eaque earum eius ex facilis illo illum ipsum iste itaque iure
                                    laudantium obcaecati quis quos sed sequi voluptate?

                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <ul className="mark_container">
                    <li className='mark'>
                        <span className="state">+</span>
                        BMW
                    </li>
                    <ul className="model_container">
                        <li className="model">
                           <h2>E60</h2>
                            <span>Նոր</span>
                            <span>Օգտագործած</span>
                            <span>Պատվերով</span>
                            <button>X</button>
                        </li>
                        <li className="model">M5</li>
                        <li className="model">M4</li>
                        <li className="model">M3</li>
                    </ul>
                </ul>
            </div>
        )
    }
}

export  default PorductList;