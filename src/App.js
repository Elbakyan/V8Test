import React,{Component} from 'react';
import 'normalize.css';
import './style/App.scss';
import 'rsuite/lib/styles/themes/default/index.less';
import {userExist, Location, Auto, Services} from "./redux/action/actions";
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
import {Loader} from 'rsuite';
import Slider from "./components/slider/Slider";
import Content from "./components/content/Content";
import ReactAudioPlayer from 'react-audio-player';





class App extends Component{
    componentDidMount() {
        // const dispach = this.props.dispatch;
        // dispach(userExist())
        // dispach(Location())
        // dispach(Auto())
        // dispach(Services())

    }
    // this.props.user.status
    render() {
        const {userStatusT,userStatusF} = {userStatusT:true,userStatusF:false}
        switch (userStatusT){
            case undefined:
                return ( <Loader size="lg" backdrop content="loading..." vertical /> )
                break;
            case false:
                return(
                    <div className="wrapper">
                        <Header />
                        <div className="container">
                            <Slider/>
                        </div>
                        <Footer />
                    </div>
                )
                break;
            case true:
                return(
                            <div className="wrapper">
                                <ReactAudioPlayer
                                    src="https://elbakyan.am/Server/audio/v8.mp3"
                                    autoPlay
                                />
                                <Header />

                                <Content />
                                <Footer />
                            </div>
                )
        }

    }

}


export default App;
