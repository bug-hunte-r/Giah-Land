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

      const {token} = await res.json();

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
            src="https://s3-alpha-sig.figma.com/img/7ec0/84a0/ec53dd269202a323721895c584b5cbc4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWPvIoUEZH-51IJbu-wYCiATnkiide-B~tNwd3Lu0XRKJ1ujJvK7Qm5UkkdoBeMFgROVKq0QjX7G4d7avXDdJldMQwAOaj0wTLuIUgPKT59bfL2qEamNP20udFvzl5CbAh3fIf9ZRkhS0aeXEMyvrQrZtRoAFD5OhXgHFfUTtHJGTWO5QmthZGNm7RxZeEsEn755ZvNwOiiP-iysWKKMAuWf70aJoaRFomLlDGLNuUF6r52wCZIgkbyYmEaN2oWUw7BmW54WPSxnsW94MF5CXzuPNNFL39JQayktAg2spT7y5LWoMWrrP9KDKkzvARrWd-tXlgHknnRpFkIha7Buaw__"
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
