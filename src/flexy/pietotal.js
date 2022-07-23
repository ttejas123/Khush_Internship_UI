import React from 'react'
import Piechart from '../chartjs/piechart'
import { ShoppingCart } from 'react-feather';


const piechart = ()=> {
    return (
        <div className=' bg-white rounded-3xl shadow-md mx-5 my-5 p-4'>
          <div className='border-b-[1px] border-gray-200 text-xl flex justify-between mt-4 px-3'>
            <div className=' font-normal'>Total Sales</div>
            <div class="border border-gray-200 px-3 py-2 mb-6  rounded-md text-sm text-center">
            <select>
                <option value="March 2021">March 2021</option>
                <option value="April 2021">April 2021</option>
                <option value="May 2021">May 2021</option>
            </select>
            </div>
          </div>
          <div className=' flex justify-between mt-4 px-3 '>
            <div className=' font-thin text-md text-gray-500'>Sales yearly</div>
            <div class="font-bold text-2xl">
            8,364,398
            </div>
          </div>
          <div class="flex relative justify-center p-10">
            <div class="mt-24 mr-28 absolute"><ShoppingCart color='gray' /></div>
            <Piechart/>
          </div>
        </div>
    );
};

export default piechart