import React from 'react'
import './Chats.css'
import './mediaChats.css'
import { FaChevronLeft } from "react-icons/fa";


export default function Chats() {
    return (
        <div className='container-chats'>
            <div>
                <FaChevronLeft className='icon-chat' />
            </div>

            <div className='container-name-countMessage'>
                <h5 className="name-user-in-chat">دکتر ورمزیار</h5>
                <p className="count-messages">1 message</p>
            </div>

            <img src="/Imgs/doctor.png" className='img-user-in-chat' />
        </div>
    )
}
