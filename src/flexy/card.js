import React from 'react'
import First from '../assest/icon1.svg' 
import { ArrowUpLeft, ShoppingBag, DollarSign } from 'react-feather'

export default function banner() {
  return (
    <div class=" h-full ml-5 mr-5 grid grid-cols-3 gap-6">
        <div class="rounded-3xl bg-white overflow-hidden shadow-xl">
        <div  class="flex w-full h-full bg-cover relative">
        <img class=" bg-cover h-44 absolute   ml-48 " src={First} alt="" />
        <div class="flex flex-col m-8 font-semibold text-lg">
            <label>Congratulation Julia</label>
            <div class="flex">
            <label class="text-2xl font-bold my-4">$39,358</label>
            <div class="flex text-sm justify-center items-center text-center ml-2">
            <label > <ArrowUpLeft size={14}  /> </label> 
            <label>+9%</label>
            </div>
            </div>
            
            <div class="bg-[#FB9678] hover:bg-[#E67E5F] hover:cursor-pointer text-sm text-white rounded-md px-2 py-2 text-center w-[60%]"> Download </div>
        </div>        
        
        </div>           
        </div>

        <div class=" shadow-xl   rounded-3xl bg-white overflow-hidden">
          <div  class="flex w-full  bg-cover  justify-between">
          
          <div class="flex flex-col m-8 font-semibold text-lg">
              <label>Purchases</label>
              <label class="text-3xl font-semibold mt-10">2,367</label>            
              <div class=" mt-2 text-sm text-gray-300">Monthly Sales </div>
          </div>  
          <div class=" bg-cover bg-[#03C9D7] h-[50%] mt-8 mr-8 hover:bg-[#05B2BD] rounded-full  p-3">
          <ShoppingBag size={25} color='white' />
          </div>      
          </div>           
        </div>

        <div class=" shadow-xl     rounded-3xl bg-white overflow-hidden">
        <div  class="flex w-full  bg-cover  justify-between">
        
        <div class="flex flex-col m-8 font-semibold text-lg">
            <label>Total Earnings</label>
            <label class="text-3xl font-semibold mt-10">$93,438.78</label>            
            <div class="mt-2 text-sm text-gray-300">Monthly Revenue </div>
        </div>  
        <div class=" bg-cover bg-[#FB9678] h-[50%] mt-8 mr-8 hover:bg-[#E67E5F] rounded-full  p-3">
        <DollarSign size={25} color='white' />
        </div>      
        </div>             
        </div>
        
    </div>
  )
}
