import React from 'react'
import logo from '../assets/PAS Logo - Black Text Blue R.png'
import el1 from '../assets/pop up-29 (Small).png'
import el2 from '../assets/pop up-30 (Small).png'

const PopUp = (props) => {
  return (props.trigger) ? (
    <div className='imgUp z-50 fixed bottom-12 right-8 flex bg-white rounded-3xl shadow-lg shadow-black'>
        <div className='relative w-72 h-72 flex flex-col gap-1'>
            <div className='flex space w-full p-4 justify-between'>
                <img src={logo} alt="logo" className='w-1/2' />
                <div className='flex justify-end items-start gap-1'>
                    <img src={el1} alt="el1" className='w-4 cursor-pointer'/>
                    <img src={el2} alt="el2" className='w-4 cursor-pointer' onClick={() => props.setTrigger(false)}/>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4 px-4'>
                <h1 className='font-cambria font-bold'>Chat with Paras Alter Station</h1>
                <p className='font-cambria'>Welcome to Paras Alter Station! How can we help you?</p>
            </div>
            <div className='w-full mt-4  flex justify-center px-4'>
                <a href="https://www.facebook.com/messages/t/329099687158064" className='w-full'>
                    <button className="font-cambria w-full rounded-lg bg-blue-900 my-4 px-6 py-1 text-white transition ease-in-out duration-300 hover:bg-blue-700">
                        Start Chat
                    </button>
                </a>
            </div>
        </div>

    </div>
  ) : ""
}

export default PopUp