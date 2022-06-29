import styles from './room.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Room = () => {
    const [rooms, setRoom] = useState([])
    useEffect(() => {
        axios
            .get(`/room/gets`, {})
            .then((res) => {
                if (res.status === 200) {
                    setRoom(res.data.rooms)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
const [w, setW] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setW(window.innerWidth)
    })
  }, [])
    const banners = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: w > 800 ? (w > 1400 ? 3 : 2) : 1,
        slidesToScroll: 3,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
    }
    return ( 
        <div className = { styles.wrapper }>
        <div className = { styles.wrapper_content }>
        <div className= {styles.wrapper_content_title}>
            <h2>Свободные комнаты</h2>
        </div>
        <div className = { styles.wrapper_content_block }>
        <div className = { styles.wrapper_content_block_items }>
        <div className = { styles.wrapper_content_block_items_item }>
        <Slider {...banners}> {
            rooms !== 'Не найдены' ? (
                rooms.map((el) => ( 
                    <div
                    className = { styles.wrapper_content_block_items_item_bg } >
                    <img src = {el.img}></img>
                    <div className = {
                        styles.wrapper_content_block_items_item_bg_text
                    } >
                    <h3 > { el.name } </h3> 
                    <div style={{display:'flex', alignItems: 'center'}}>
                    <h2>{ el.cost }
                    $<span></span>
                    </h2>
                    <a href={`/Room/${el._id}`} style={{fontSize: '18px', paddingLeft: '230px', textDecoration: 'none', color: 'white'}}>Полная информация</a> 
                    </div>
                    </div> 
                    </div>
                ))
            ) : ( 
                <div > Свободных комнат нет </div>
            )
        } </Slider>
        </div> 
        </div> 
        </div> 
        </div> 
        </div>
    )
}
export default Room