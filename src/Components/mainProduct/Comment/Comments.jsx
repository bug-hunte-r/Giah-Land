import React from 'react'
import './Comments.css'
import './mediaComments.css'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";



export default function Comments() {
  return (
    <div className='container-comment'>
        <div className="container-comment-user-info">
            <img src="/Imgs/my-img 2.webp" className='img-user-in-comment'/>
            <p className="name-user-in-comment">شایان جعفرنژاد</p>
        </div>
        <div className="container-comment-side-left">
            <FaRegHeart />
            <p className="date-comment">۴ روز پیش</p>
        </div>

        <h3 className="text-comment">گل هایی واقعا زیبا و بی نظیر دراید</h3>
    </div>
  )
}
