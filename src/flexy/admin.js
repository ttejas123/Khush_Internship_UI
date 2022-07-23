import React from 'react'
import Admin from '../assest/admin.jpg'
import { ChevronDown } from 'react-feather'

export default function admin() {
  return (
    <div class=" flex items-center rounded-md hover:cursor-pointer px-2 py-1.5 hover:bg-gray-100">
        <img class="w-8 h-8 rounded-full " src={Admin}/>
        <label class="text-md  hover:cursor-pointer mx-2"> Hii,</label>
        <label class="text-md text-gray-400 font-semibold hover:cursor-pointer">Julia</label>
        <ChevronDown color='gray' size={20}/>
    </div>
  )
}
