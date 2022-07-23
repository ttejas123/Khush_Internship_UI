import React from 'react'
import Linechart from '../chartjs/linechart'


const piechart = ()=> {
    return (
        <div className=' bg-white rounded-3xl shadow-md mx-5 my-5 p-4'>
          <div className='border-b-[1px] border-gray-200 text-xl flex justify-between mt-4 px-3'>
            <div className=' font-semibold'>Revenue Updates</div>
            <div class="border border-gray-200 px-3 py-2 mb-6  rounded-md text-sm text-center">
            <select>
                <option value="March 2021">March 2021</option>
                <option value="April 2021">April 2021</option>
                <option value="May 2021">May 2021</option>
            </select>
            </div>
          </div>
          <div>
            <Linechart/>
          </div>
          
        </div>
    );
};

export default piechart