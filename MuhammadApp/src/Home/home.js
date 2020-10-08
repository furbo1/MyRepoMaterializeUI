import React, { Component } from 'react';
 import Header from '../component/Header/Header'
 import Body from '../component/body/body'
 import Footer from '../component/footer/footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

export default Home;