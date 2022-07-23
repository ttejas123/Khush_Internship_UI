import React from 'react'
import Admin from './admin'
import {Menu,Search,ShoppingCart,Bell, MessageSquare} from 'react-feather'

export default function componentNav() {
  return (
    <div class="flex justify-between ">
        <div class="flex items-center hover:cursor-pointer">
            <Menu size={20} color='gray' class="mx-4" />
            <Search size={20} color='gray' class="mx-2" />
        </div>
        <div class="flex items-center hover:cursor-pointer "> 
           
            <div class="border-r-[1px] border-gray-200 flex items-center p-1 hover:cursor-pointer">
            <ShoppingCart size={20} color='gray' class="mx-3" />
            <MessageSquare size={20} color='gray' class="mx-3" />
            <Bell size={20} color='gray' class="mx-2 " />
            </div>
            <div class="text-gray-500 flex flex-col mx-2 " >
            <Admin/>
            </div>
            
        </div>
    </div>
  )
}
