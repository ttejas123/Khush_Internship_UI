import React from 'react'
import Column from '../chartjs/column'
import { Circle } from 'react-feather';


const Columns = ()=> {
    return (
        <div className=' bg-white rounded-3xl shadow-md mx-5 my-5 p-4'>
          <div className='text-xl flex justify-between mt-4 px-3'>
            <div className=' font-semibold'>Sales Overview</div>
            <div className=' flex justify-between mt-4 px-3 '>
            <div class="font-bold flex text-2xl">
                <div class="flex items-center text-xs text-[#03C9D7] mr-2">
                <Circle fill='#03C9D7' color='#03C9D7' size={10} class="mr-1"/>
                Ample
                </div>
                <div class="flex items-center text-xs text-[#FB9678]">
                <Circle fill='#FB9678' color='#FB9678' size={10} class="mr-1"/>
                Pixel Admin
                </div>
            </div>
          </div>
          </div>
          
          <div class=" p-10">
            <Column/>
        </div>
        </div>
    );
};

export default Columns;