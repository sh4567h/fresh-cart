import React from 'react'
import { IoMdAdd } from "react-icons/io";
export default function ButtonHome() {
  return (
    <button title='add' type='button' className="h-10 w-10 rounded-full flex items-center justify-center transition bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-70" > <IoMdAdd className='text-2xl' /> </button>
  )
}
