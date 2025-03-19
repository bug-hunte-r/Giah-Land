import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import SidebarDash from '../SidebarDash/SidebarDash';
import { CiUser } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdKey } from "react-icons/md";

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
            <img src="/Imgs/my-img 2.webp" />
            <button className="btn-edit-user-img">ویرایش تصویر</button>
            <button className="btn-delete-user-img">حذف تصویر</button>
          </div>

          <div className="container-inputs-user-dash">
            <input type="text" className="inputs-user-dash" placeholder='نام' />
            <CiUser />

            <input type="text" className="inputs-user-dash" placeholder='نام خانوادگی' />
            <CiUser />

            <input type="text" className="inputs-user-dash" placeholder='شماره تلفن' />
            <IoPhonePortraitOutline />

            <input type="email" className="inputs-user-dash" placeholder='ایمیل' />
            <MdMailOutline />
            <input type="text" className="inputs-user-dash" placeholder='آدرس منزل' />
            <CiLocationOn />

            <input type="text" className="inputs-user-dash" placeholder='شماره منزل' />
            <MdOutlineLocalPhone />
          </div>

          <div className="container-chnage-user-pass">
            <input type="password" className="input-change-user-pass" placeholder='رمز عبور جدید را وارد کنید' />
            <MdKey />
            <button className="btn-save-changes">ذخیره اطلاعات</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserDashboard;