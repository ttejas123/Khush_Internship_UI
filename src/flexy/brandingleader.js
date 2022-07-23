import React from 'react'
import Icon1 from '../assest/icon2.jpeg'
import Icon2 from '../assest/icon3.jpg'
import Icon3 from '../assest/icon4.jpg'
import Icon4 from '../assest/icon5.jpg'

function brandingleader() {
    const data=[
        {
            img:Icon1
        },
        {
            img:Icon2
        },
        {
            img:Icon3
        },
        {
            img:Icon4
        }
    ]
  return (
    <div>
        <div className=' text-xl flex justify-between mt-4 px-3'>
            <div className=' font-semibold'>Leaders</div>
          </div>
          <div className=' mx-3 flex  my-3 '>
          {data.map((val,index)=>{
            return(
                
            <img class="w-9 h-9 mr-2 rounded-full" src={val.img}/>
          
            )
          })}
          </div>
    </div>
  )
}

export default brandingleader