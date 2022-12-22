import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form
          action='https://getform.io/f/40944cf4-496f-40d4-9081-98c3d8073b54'
          method='POST'
          className='flex flex-col w-full md:w-7/12'
        >
          <Title>Contact</Title>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <button
            type='button'
            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-gray-700 drop-shadow-md hover:stroke-white'
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
