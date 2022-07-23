import React from 'react'
import { MoreHorizontal, ShoppingCart, Star, MessageSquare } from 'react-feather'

export default function weekly() {
  return (
    <div className=' bg-white rounded-3xl shadow-md mx-5 mt-5 p-4'>
          <div className=' text-xl flex justify-between mt-4 px-3'>
            <div className=' font-semibold'>Weekly Stats</div>
            <div class=" hover:bg-gray-100 hover:rounded-full hover:cursor-pointer p-3   rounded-md text-sm text-center">
            <MoreHorizontal color='gray'/>
            </div>
          </div>
          <div class=" bg-blue-100 hover:rounded-full hover:cursor-pointer p-3   rounded-md text-sm text-center">
            <ShoppingCart color='gray'/>
            </div>
    </div>
  )
}
