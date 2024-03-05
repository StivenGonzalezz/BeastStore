import React from 'react'
import logo from '../assets/images/LogLogin.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div id='bg' className='flex justify-center items-center min-h-screen '>

      <div className='flex h-[600px] w-[55%] rounded-3xl '>
        <div className='w-[50%] items-center bg-gradient-to-l from-black'>
          <h1 className='h-[13%] text-center font-nunito font-bold text-6xl pt-5 text-[#E2E2E2]'>Welcome</h1>
          
          <h2 className='h-[5%] text-center font-nunito font-bold text-3xl text-[#A9A9A9]'>Welcome To TheBeastStore</h2>

          <form className='h-[82%] flex flex-col' action="">
            <div className='flex flex-col h-[80%] mt-12 justify-between px-10 '>

              <div className='flex flex-col '>
                <label className='font-nunito text-2xl text-[#E2E2E2]'>Username</label>
                <input className='font-nunito text-xl bg-transparent text-[#A9A9A9] pl-2 outline-none focus:border-b-2 border-[#A9A9A9]' type="text" required placeholder='example'/>
              </div>

              <div className='flex flex-col'>
                <label className='font-nunito text-2xl text-[#E2E2E2]'>Password</label>
                <input className='font-nunito text-xl bg-transparent text-[#A9A9A9] pl-2 outline-none focus:border-b-2 border-[#A9A9A9]' type="password" required placeholder='password'/>
              </div>

              <Link to="/index" className=' self-center font-nunito text-3xl w-[20%] text-[#E2E2E2] hover:text-[#ff794c] duration-300'>Login</Link>
            </div>
            <Link to="/register" className=' self-end w-[27%] text-end font-nunito text-lg text-[#E2E2E2] hover:text-[#ff794c] duration-300'>Create account</Link>
          </form> 

          

        </div>
        <img className='h-full w-[50%] object-cover rounded-r-3xl' src={logo} alt=""/>
      </div>
      
    </div>
  )
}

export default Login
