// import React from 'react'
import {Header} from '../components/header/Header'
import {RoomInfo} from '../components/roomInfo/RoomInfo'
import {Footer} from '../components/footer/Footer'



const Room = (id) => {
    const idS = id.match.params.id;
    return (
        <div>
        <Header/>
        <RoomInfo id = {idS}/>
        <Footer/>
        </div>
    )
}

export default Room
