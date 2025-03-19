import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import SidebarDash from '../SidebarDash/SidebarDash';
import { CiUser } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdKey } from "react-icons/md";
import './UserDash.css'
import './mediaUserDash.css'

const socket = io('https://giah-land-websocket.onrender.com');

function UserDashboard() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const username = 'user1'; // Change this per user (e.g., from auth later)

  useEffect(() => {
    socket.emit('register', username);
    console.log('Registered as:', username);

    socket.on('message', (msg) => {
      console.log('Received message:', msg);
      setChat((prev) => [...prev, msg]);
    });

    return () => socket.off('message');
  }, []);

  const sendMessage = () => {
    const msg = { user: username, text: message };
    socket.emit('chatMessage', msg);
    setChat((prev) => [...prev, msg]);
    setMessage('');
  };

  return (
    <div className='container'>
      <SidebarDash />

      <div className="container-user-info-dash">
        <h2 className="title-user-info-dash">مشخصات حساب کاربری</h2>

        <div className="container-edit-user-info">

          <div className="container-edit-user-img">
            <button className="btn-delete-user-img">حذف تصویر</button>
            <button className="btn-edit-user-img">ویرایش تصویر</button>
            <img src="/Imgs/my-img 2.webp" className='img-user-dash' />
          </div>

          <div className="container-inputs-user-dash">

            <div>
              <input type="text" className="inputs-user-dash" placeholder='نام خانوادگی' />
              <CiUser className='icons-inputs-user-dash' size={20} />

              <input type="text" className="inputs-user-dash" placeholder='نام' />
              <CiUser className='icons-inputs-user-dash' size={20} />
            </div>

            <div>
              <input type="email" className="inputs-user-dash" placeholder='ایمیل' />
              <MdMailOutline className='icons-inputs-user-dash' size={20} />

              <input type="text" className="inputs-user-dash" placeholder='شماره تلفن' />
              <IoPhonePortraitOutline className='icons-inputs-user-dash' size={20} />
            </div>

            <div>
              <input type="text" className="inputs-user-dash" placeholder='شماره منزل' />
              <MdOutlineLocalPhone className='icons-inputs-user-dash' size={20} />

              <input type="text" className="inputs-user-dash" placeholder='آدرس منزل' />
              <CiLocationOn className='icons-inputs-user-dash' size={20} />
            </div>
          </div>

          <h3 className="title-change-user-pass">تغییر رمز عبور</h3>
          <div className="container-chnage-user-pass">
            <button className="btn-save-changes">ذخیره اطلاعات</button>

            <input type="password" className="input-change-user-pass" placeholder='رمز عبور جدید را وارد کنید' />
            <MdKey className='icon-input-change-user-pass' size={20} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default UserDashboard;