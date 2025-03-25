import React, { useEffect, useState } from 'react'
import './SignUp.css'
import './mediaSignUp.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdKey } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";

export default function SignUp() {

    const [allUsers, setAllUsers] = useState([])

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phonNumber, setPhonNumber] = useState('')
    const [gmail, setGmail] = useState('')
    const [password, setPassword] = useState('')

    let newUserInfo = {
        name,
        lastName,
        phonNumber,
        gmail,
        password
    }

    let SignUpUserHandler = (event) => {
        event.preventDefault()

        fetch('https://giahland-api.vercel.app/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(newUserInfo)
        })
            .then(res => console.log(res))
    }

    useEffect(() => {
        console.log(allUsers);
    }, [])


    return (
        <div className='container'>

            <form className='form-sign-up'>
                <div className="container-img-sign-up">
                    <img src="https://s3-alpha-sig.figma.com/img/7ec0/84a0/ec53dd269202a323721895c584b5cbc4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWPvIoUEZH-51IJbu-wYCiATnkiide-B~tNwd3Lu0XRKJ1ujJvK7Qm5UkkdoBeMFgROVKq0QjX7G4d7avXDdJldMQwAOaj0wTLuIUgPKT59bfL2qEamNP20udFvzl5CbAh3fIf9ZRkhS0aeXEMyvrQrZtRoAFD5OhXgHFfUTtHJGTWO5QmthZGNm7RxZeEsEn755ZvNwOiiP-iysWKKMAuWf70aJoaRFomLlDGLNuUF6r52wCZIgkbyYmEaN2oWUw7BmW54WPSxnsW94MF5CXzuPNNFL39JQayktAg2spT7y5LWoMWrrP9KDKkzvARrWd-tXlgHknnRpFkIha7Buaw__" className='img-sign-up' />
                </div>

                <div className="container-inputs">
                    <h3 className="title-form">ثبت نام</h3>

                    <input type="text" className="inputs-login" placeholder='نام' value={name} onChange={(event) => setName(event.target.value)} />
                    <FaRegUser size={20} className='icon-input-login' />

                    <input type="text" className="inputs-login" placeholder='نام خانوادگی' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    <FaUserTie size={20} className='icon-input-login' />

                    <input type="text" className="inputs-sign-up" placeholder='شماره موبایل' value={[phonNumber]} onChange={(event) => setPhonNumber(event.target.value)} />
                    <IoPhonePortraitOutline size={20} className='icon-input-sign-up' />

                    <input type="email" className="inputs-sign-up" placeholder='ایمیل' value={gmail} onChange={(event) => setGmail(event.target.value)} />
                    <MdOutlineMailOutline size={20} className='icon-input-sign-up' />

                    <input type="password" className="inputs-sign-up" placeholder='تعریف رمز عبور' value={password} onChange={(event) => setPassword(event.target.value)} />
                    <MdKey size={20} className='icon-input-sign-up' />

                    <button className='btn-sign-up' onClick={SignUpUserHandler}>ثبت نام</button>

                    <p className="link-go-to-login">حساب کاربری دارید؟ <Link to={'/Login'} className='Link-go-to-sign-in'>ورود</Link> کنید</p>
                </div>
            </form>
        </div>
    )
}
