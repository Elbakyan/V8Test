import React, {Component} from "react";
import {Button} from "rsuite";
import  './productList.scss'

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
        }
    }

    show = (e) => {
        let block = document.querySelectorAll('.product')
        let but = e.target
        console.log(block[0])
        block.forEach((e,i)=>{
            if(i == Number(but.id)){
                if(block[i].style.height == 'auto'){
                    block[i].style.height = '60px'
                    but.innerHTML = 'Ավելին'
                }else{
                    block[i].style.height = 'auto'
                    but.innerHTML = 'Փակել'
                }



                console.log(block[i].style.height)
            }
        })
    }

    render() {
        return (
            <div className="product_list">
                {
                    autoList.map(({id,model,mark,pat,note,nor,img},i)=>(
                        <div className='product' key={id}  style={{height: '60px'}}>
                            <div className="product_list_header">
                                <div className='product_list_heading'>
                                    <div className="product_list_name">
                                        <h4>{model} {mark}</h4>
                                    </div>
                                    <div>
                                        <h4>{pat}</h4>
                                    </div>
                                    <div>
                                        <h4>{nor}</h4>
                                    </div>
                                </div>

                                <div className="product_list_button">
                                    <Button color="violet">Կարգավորել</Button>
                                    <Button color="red">Հեռացնել</Button>
                                    <Button id = {i} color="yellow" onClick={this.show}>Ավելին</Button>
                                </div>
                            </div>

                            <div className='product_list_body'>
                               <div className="product_list_img">
                                   {

                                       img.map((img,i)=>(
                                           <div key={i}>
                                               <img src={img} alt=""/>
                                           </div>
                                       ))
                                   }
                               </div>
                                <div className="product_list_note">
                                    <p>{note}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export  default PorductList;