import React from 'react'
import Brandingleader from './brandingleader';
import { MoreHorizontal } from 'react-feather';



const branding = ()=> {
    const data=[
        {
            name:"Due Date",
            date:"Oct 23, 2021"
        },
        {
            name:"Budget",
            date:"$98,500"
        },
        {
            name:"Expense",
            date:"$63,000"
        }
    ]
    return (
        <div className=' bg-white rounded-3xl shadow-md mx-5 mt-5 p-4'>
          <div className=' text-xl flex justify-between mt-4 px-3'>
            <div className=' font-semibold'>MedicalPro Branding</div>
            <div class=" hover:bg-gray-100 hover:rounded-full hover:cursor-pointer p-3   rounded-md text-sm text-center">
            <MoreHorizontal color='gray'/>
            </div>
          </div>
          <div className=' mx-3'>
            <div className=' bg-[#E5FAFB] text-[#03C9D7] font-semibold text-xs p-1 w-24 text-center rounded-md'>
            16 APR, 2021
            </div>
          </div>
          <div className=' mx-3 grid grid-cols-3 gap-4 my-5  border-b-[1px]'>
          {data.map((val,index)=>{
            return(
                
                <div class="flex flex-col border-r-[1px] pb-2  border-gray-200">
            <div className=' text-gray-400 font-normal text-sm '>
            {val.name}
            </div>
            <div className=' font-semibold text-sm mb-3'>
            {val.date}
            </div>
            </div>
            
            )
          })}
          </div>
          <div class="border-b-[1px] border-gray-200 my-5 mx-3 ">
          <div className=' text-xl flex justify-between mt-4  '>
            <div className=' font-semibold'>Teams</div>
          </div>
          <div className=' flex  my-5 '>
            <div className=' bg-[#03C9D7] text-white font-semibold text-xs p-1 mr-2 w-24 text-center rounded-md'>
            Bootstrap
            </div>
            <div className=' bg-[#FB9678] text-white font-semibold text-xs p-1 w-24 text-center rounded-md'>
            Angular
            </div>
          </div>
          </div>
          <div class="border-b-[1px] border-gray-200 mx-3 ">
          <Brandingleader/>
          </div>
          <div className=' mx-3  my-5 '>
          <div className='  flex justify-between items-center'>
            <div className='bg-[#03C9D7] py-1.5 font-md text-center text-white px-4 rounded-md'>Add</div>
            <div class=" text-gray-500 font-md">
            36 Recent Transactions
            </div>
          </div>
            
          </div>
          


        </div>
    );
};

export default branding