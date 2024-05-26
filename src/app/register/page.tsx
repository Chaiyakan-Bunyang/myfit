"use client"
import React, { useState } from 'react'
import style from './register.module.css'
import axios from 'axios'
import { API_URL, server } from '../components/constant/constant'
const Register = () => {
    const [InitializeState,SetInitializeState] = useState({
        username:"",
        email: "",
        password:"",
    })
    const [StateUser,SetStateUser] = useState(InitializeState);

    const handleChange = (e:any) =>{
        let value = e.target.value;
        let name = e.target.name;
        SetStateUser((prevState:any) => (
        {
            ...prevState,
            [name]: value
        }
        ))
    }

    const handleSubmit = async () =>{
     let res = await axios.post(API_URL.REGISTER,StateUser)
     if(res.status == 201){
        alert("สมัครสมาชิกสำเร็จ")
        window.location.href = "/login"
     } else{
        console.log('Register Fail');
     }
    }
  return (
    <main>
        <div className={`flex justify-center items-center h-screen ${style.bg_image}`}>
            <div className={`w-96 p-6 shadow-lg bg-white rounded-md ${style.register_box}`}>
                <h1 className='text-3xl block text-center'>ลงทะเบียน</h1>
                <div className='mt-3'>
                    <label htmlFor="user_email" className='block text-base mb-2'>อีเมล</label>
                    <input name='email' id='user_email' onChange={(e)=>handleChange(e)} placeholder='กรุณากรอกอีเมล' type="text" className='border w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-indigo-700' />
                </div>
                <div className='mt-3'>
                    <label htmlFor="user_name" className='block text-base mb-2'>ชื่อผู้ใช้งาน</label>
                    <input name='username' id='user_name' onChange={(e)=>handleChange(e)} placeholder='กรุณากรอกชื่อผู้ใช้งาน' type="text" className='border w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-indigo-700' />
                </div>
                <div className='mt-3'>
                    <label htmlFor="user_password" className='block text-base mb-2'>รหัสผ่าน</label>
                    <input name='password' id='user_password' onChange={(e)=>handleChange(e)} placeholder='กรุณากรอกรหัสผ่าน' type="password" className='border w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-indigo-700' />
                </div>
                <div className='mt-3'>
                    <label htmlFor="cf_password" className='block text-base mb-2'>ยืนยันรหัสผ่าน</label>
                    <input name='confPassword' id='cf_password' onChange={(e)=>handleChange(e)} placeholder='กรุณายืนยันรหัสผ่าน' type="password" className='border w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-indigo-700' />
                </div>

                <div className='mt-5 flex justify-center items-center'>
                    <input type="checkbox" name='policy' id='user_policy' />
                    <label htmlFor="user_policy" className='ml-2 text-sm text-balance'>การเปิดบัญชี MyFit ท่านรับทราบและตกลงตาม เงื่อนไขการให้บริการ & นโยบายความเป็นส่วนตัว</label>
                </div>
                <div className='mt-3'>
                    <button 
                    onClick={handleSubmit}
                    className='border-2 border-indigo-700 bg-indigo-700 text-white rounded-md px-2 py-1 w-full hover:bg-transparent hover:border-indigo-700 hover:text-indigo-700 transition ease-in-out delay-50'
                    >ลงทะเบียน</button>
                </div>
                <div className='mt-5 text-center'>
                    <span className='text-sm'>หากมีบัญชีอยู่แล้วคุณสามารถ <a className='text-indigo-700'href="/login">เข้าสู่ระบบ</a></span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Register