import React from "react";
import './Footer.scss'
import  {Icon} from "rsuite";
export default function (){

    const info = [

        {
            icon:<Icon icon="map-marker" size="lg" />,
            name:'Ք․ԵՐԵՎԱՆ Ռաֆու 19'
        },
        {
            icon:<Icon icon="mobile" size="lg" />,
            name:'(374)-41-888844'
        },
        {
            icon:<Icon icon="mobile" size="lg" />,
            name:'(374)-41-888844'
        },
        {
            icon:<Icon icon="mobile" size="lg" />,
            name:'(374)-93-888044'
        },
        {
            icon:<Icon icon="envelope" size="1x" />,
            name:'info@v8.am'
        },
    ]

    return (
        <footer >
            <div className="container row footer_container ">
                <div>
                    <nav className="Footer_nav">
                        <ul>
                            <h4>Հասցե</h4>
                            {
                                info.map(({icon,name},i)=>(
                                    <li key={i}>
                                        {icon}
                                        <span>{name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}