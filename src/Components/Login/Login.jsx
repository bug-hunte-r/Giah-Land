import React, { useState } from "react";
import "./Login.css";
import "./mediaLogin.css";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdKey } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false)
  async function handleSignIn(e) {
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      setLoading(true)
      const res = await fetch(
        "https://giahland-api.vercel.app/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const { token } = await res.json();

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 40);
      document.cookie = `session=${token}; path=/; Secure; SameSite=Strict; Expires=${expirationDate.toUTCString()};`;
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="container">
      <div className="form-login">
        <div className="container-img-login">
          <img
            src="Imgs/img-form.png"
            className="img-login"
          />
        </div>

        <form className="container-inputs" onSubmit={handleSignIn}>
          <h3 className="title-form">ورود</h3>

          <input
            type="text"
            className="inputs-login"
            placeholder="شماره موبایل"
            name="phone"
          />
          <IoPhonePortraitOutline size={20} className="icon-input-login" />

          <input
            type="password"
            className="inputs-login"
            placeholder="رمز عبور"
            name="password"
          />
          <MdKey size={20} className="icon-input-login" />

          <button className="btn-login" type="submit">
            ورود
          </button>

          <p className="link-go-to-login">
            حساب کاربری ندارید؟{" "}
            <Link to={"/signUp"} className="Link-go-to-sign-in">
              ثبت نام
            </Link>{" "}
            کنید
          </p>
        </form>
      </div>
    </div>
  );
}
