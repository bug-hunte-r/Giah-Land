import React from 'react'
import './Counseling.css'
import './mediaCounseling.css'
import SidebarDash from '../SidebarDash/SidebarDash'
import { LuCopyPlus } from "react-icons/lu";


export default function Counseling() {
  return (
    <div className='container'>
        <SidebarDash />

        <div className="container-counseling">
            <h3 className="title-counseling">مشاوره با گیاه پزشک</h3>
            <div className="box-add-img-counseling">
                <LuCopyPlus size={25} />
                آپلود تصویر گیاه
            </div>

            <input className='input-ask-problem-counseling' placeholder=':توضیح درباره مشکل گیاه'></input>

            <button className='btn-send-problems'>ارسال</button>
        </div>
    </div>
  )
}
