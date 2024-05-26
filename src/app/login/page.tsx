"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import axios from "axios";
import { API_URL } from "../components/constant/constant";
const Login = () => {
  const [InitializeState, SetInitializeState] = useState({
    email: "",
    password: "",
  });

  const [CredentialState,SetCredentialState] = useState(InitializeState);
  const handleChange = (e:any) => {
    let value:any = e.target.value;
    let name:any = e.target.name;
    if(value){
      SetCredentialState((prevState)=>({
        ...prevState,
        [name]:value
      }))
    }
  }
  const handleLogin = async () =>{
    let res:any = "";
    try{
      res = await axios.post(API_URL.LOGIN,CredentialState);
    } catch(error){
      console.log(error);
    }

    if(res.status == 201){
      alert('เข้าสู่ระบบสำเร็จ');
      window.location.href = "/";
    }
    else{
      alert("เข้าสู่ระบบไม่สำเร็จ")
    }
  }  
  return (
    <main>
      <div
        className={`flex justify-center h-screen items-center bg-slate-200 ${styles.bg_image}`}
      >
        <div
          className={`w-96 p-6 shadow-lg bg-white rounded-md opacity-100 ${styles.login_box}`}
        >
          <h1 className="text-3xl block text-center">เข้าสู่ระบบ</h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="E-mail" className="block text-base mb-2">
              อีเมล
            </label>
            <input
              type="text"
              id="E-mail"
              name="email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-indigo-700"
              placeholder="กรุณากรอกอีเมล"
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="Password" className="block text-base mb-2">
              รหัสผ่าน
            </label>
            <input
              type="text"
              id="Password"
              name="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-gray-600"
              placeholder="กรุณากรอกรหัสผ่าน"
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <input type="checkbox" name="remember_user" id="rememberUser" />
              <label htmlFor="rememberUser" className="ml-2">
                จดจำรหัสผ่าน
              </label>
            </div>
            <div>
              <a href="#" className="ml-2 text-indigo-600">
                ลืมรหัสผ่าน
              </a>
            </div>
          </div>
          <div className="mt-5">
            <button onClick={handleLogin} className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 transition ease-in-out delay-50">
              เข้าสู่ระบบ
            </button>
          </div>

          <div className="mt-3 flex items-center">
            <div className="border-t border-1 border-gray-400 flex-grow"></div>
            <div className="px-3 text-gray-800 font-medium text-base">หรือ</div>
            <div className="border-t border-1 border-gray-400 flex-grow"></div>
          </div>

          <div className="mt-3 text-center">
            <span className="text-sm text-gray-600">
              ยังไม่ได้สมัครสมาชิกใช่หรือไม่{" "}
              <a className="text-indigo-700" href="/register">
                สมัครสมาชิก
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
