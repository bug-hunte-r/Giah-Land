import React, { useState } from 'react'
import './Comments.css'
import './mediaComments.css'
import { FaRegHeart } from "react-icons/fa";
import { CgCornerUpRight } from "react-icons/cg";
import { PiDotsThreeBold } from "react-icons/pi";


export default function Comments() {

    const [isLiked, setIsLiked] = useState(false)

    let likeCommentHandler = () => {

        setIsLiked(prevState => {
            return prevState = !prevState
        })
    }

    return (
        <div className='container-comment'>
            <div className="container-top-comment">
                <div className="container-comment-side-left">
                    <PiDotsThreeBold className='icon-comments' />
                    <CgCornerUpRight className='icon-comments' />
                    <FaRegHeart className={`icon-comments ${isLiked && 'liked'}`} onClick={likeCommentHandler} />
                    <p className="date-comment">۴ روز پیش</p>
                </div>

                <div className="container-comment-user-info">
                    <p className="name-user-in-comment">شایان جعفرنژاد</p>
                    <img src="/Imgs/my-img 2.webp" className='img-user-in-comment' />
                </div>
            </div>

            <h3 className="text-comment">گل هایی واقعا زیبا و بی نظیر دراید</h3>
        </div>
    )
}
