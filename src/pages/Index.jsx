// import React from 'react'
import {Header} from '../components/header/Header'
import {Slider} from '../components/slider/Slider'
import {About} from '../components/about/About'
import {WhatWeDo} from '../components/whatwedo/WhatWeDo'
import {Room} from '../components/room/Room'
import {Footer} from '../components/footer/Footer'



const Index = () => {
    return (
        <div>
        <Header/>
        <Slider/>
        <About/>
        <WhatWeDo/>
        <Room/>
        <Footer/>
        </div>
    )
}

export default Index
