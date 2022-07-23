import React from 'react'
import Brandingleader from './brandingleader';
import Icon from '../assest/icon7.jpg';
import { Clock, MessageCircle } from 'react-feather';
import Icon1 from '../assest/icon2.jpeg'
import Icon2 from '../assest/icon3.jpg'
import Icon3 from '../assest/icon4.jpg'



const branding = ()=> {
    const data=[
        {
            img:Icon1
        },
        {
            img:Icon2
        },
        {
            img:Icon3
        }
    ]
    return (
        <div className=' bg-white rounded-3xl shadow-md mx-5 mt-5'>
            <div class="w-full h-[100%] ">
                <img class=" w-full h-52 rounded-t-3xl" src={Icon} />
            </div>
          <div className='flex items-center my-3 mx-7 pt-3'>
          <Clock size={20} color='gray'/>
            <div className=' text-gray-400 ml-2 font-semibold text-sm '>
            22 March, 2021
            </div>
          </div>
          <div class="border-b-[1px] border-gray-200 my-5 mx-7 ">
          <div className=' text-lg flex justify-between mt-4  '>
            <div className=' font-semibold'>Super awesome, React 18 is coming soon!</div>
          </div>
          <div className=' flex  my-5 '>
            <div className=' bg-[#03C9D7] text-white font-semibold text-xs p-1 mr-4 w-24 text-center rounded-md'>
            Medium
            </div>
            <div className=' bg-[#FB9678] text-white font-semibold text-xs p-1 w-14 text-center rounded-md'>
            Low
            </div>
          </div>
          </div>
          <div class=" mx-3 flex justify-between">
                <div className=' mx-5 flex  pb-7  '>
                {data.map((val, index) => {
                    return(
                        <img class="w-9 h-9 mr-2 rounded-full" src={val.img}/>
                    )
                })}
                
          </div>
          <div className=' mx-5 flex  pb-7  '>
          <MessageCircle color='gray'/>
          </div>
          </div>
        </div>
    );
};

export default branding