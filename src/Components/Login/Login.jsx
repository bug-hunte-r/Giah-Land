import React from 'react'
import './Login.css'
import './mediaLogin.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdKey } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='container'>

            <form className='form-login'>
                <div className="container-img-login">
                    <img src="https://s3-alpha-sig.figma.com/img/7ec0/84a0/ec53dd269202a323721895c584b5cbc4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWPvIoUEZH-51IJbu-wYCiATnkiide-B~tNwd3Lu0XRKJ1ujJvK7Qm5UkkdoBeMFgROVKq0QjX7G4d7avXDdJldMQwAOaj0wTLuIUgPKT59bfL2qEamNP20udFvzl5CbAh3fIf9ZRkhS0aeXEMyvrQrZtRoAFD5OhXgHFfUTtHJGTWO5QmthZGNm7RxZeEsEn755ZvNwOiiP-iysWKKMAuWf70aJoaRFomLlDGLNuUF6r52wCZIgkbyYmEaN2oWUw7BmW54WPSxnsW94MF5CXzuPNNFL39JQayktAg2spT7y5LWoMWrrP9KDKkzvARrWd-tXlgHknnRpFkIha7Buaw__" className='img-login' />
                </div>

                <div className="container-inputs">
                    <h3 className="title-form">ورود</h3>

                    <input type="text" className="inputs-login" placeholder='شماره موبایل' />
                    <IoPhonePortraitOutline size={20} className='icon-input-login'/>

                    <input type="password" className="inputs-login" placeholder='رمز عبور' />
                    <MdKey size={20} className='icon-input-login'/>

                    <button className='btn-login'>ورود</button>

                    <p className="link-go-to-login">حساب کاربری ندارید؟ <Link to={'/signUp'} className='Link-go-to-sign-in'>ثبت نام</Link> کنید</p>
                </div>
            </form>
        </div>
    )
}
