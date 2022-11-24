import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function TemplateLogin() {
  return (
    <div className='bg-white w-screen h-screen overflow-hidden flex'>
      <div className="h-full flex-1 m-10">
        <div className="h-full flex-1 flex justify-center items-center flex-col">
          <div className='mb-8 text-lg text-gray-700 font-bold'>
            Login
          </div>
          <div className="mb-4 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6  w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between  w-1/2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
      <div className="h-full w-[50rem]">
        <div className='relative w-full max-w-[50rem] h-full'>
          <div className='absolute -top-[800px] right-0 w-full h-[50rem] bg-[#3a47b0] rounded-[50px] -rotate-[10deg] z-10'/>
          <div className='absolute -top-[70px] -right-[100px] w-full h-[60rem] bg-[#5566ff] rounded-[50px] rotate-[6deg] z-0 overflow-hidden'>
            <div className='absolute -bottom-[-100px] -right-[-10px] w-full h-[40rem] bg-[#5f70ff] rounded-[50px] rotate-[20deg] z-10'/>
          </div>
          <div className='absolute -bottom-[400px] -right-[200px] w-full h-[60rem] bg-[#59f] rounded-[50px] rotate-[220deg] z-10 overflow-hidden'>
            <div className='absolute -bottom-[-400px] -right-[300px] w-full h-[30rem] bg-[#5191f2] rounded-[50px] rotate-[130deg] z-10'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateLogin
