import React from 'react'
import './Chats.css'
import { FaChevronLeft } from "react-icons/fa";


export default function Chats() {
    return (
        <div className='container-chats'>
            <img src="https://s3-alpha-sig.figma.com/img/7c3a/fa00/1e3e23379e3842d3d05705a6bd52fd71?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=thIBPX24PjkmXL-z-MHFzXvLCBWq03k3zVoLPXDaY1vd-9xYlxnq65DMKsCBujY37U2FOqOcQ~rXH8HCMWoiyh4xGHaiyWaLxmr9GZ-fFdRMgTBCO5vF-9DFcoIMzvUp1WoVFqn~9TtQbffZER6KtWvfigDTUrF-9rWs3Bua~htyAZqGaN-zqWYL6k7kFH5PH23AaUcjwEnl~d2ZGnr5DkpAKoe7~LVBbbZcWxBRCQ5oFSt2Zl~8itttv7JRsezAZf-BMMxHcq6uQVY2~FiR4nSogRKVixKW~9CZdx9kQScvsH0Jm5p8hRSyQZkl4AlTpl4dngy5AjhuqQCvuA5eHg__" className='img-user-in-chat' />
            <h5 className="name-user-in-chat">دکتر ورمزیار</h5>
            <p className="count-messages">۱ پیام خوانده نشده</p>
            <div>
                <FaChevronLeft />
            </div>
        </div>
    )
}
