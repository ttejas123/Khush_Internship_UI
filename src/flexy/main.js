import React from 'react'
import Nav from './nav'
import { Heart } from 'react-feather'
import Card from './card'
import Product from './product'
import PieTotal from './pietotal'
import Branding from './branding'
import Commingsoon from './comingsoon'
import Revenue from './revenue'
import Column from './column'
import Weekly from './weekly'


export default function componentblog() {
  return (
    <div class="h-[100%] w-100vh  bg-gray-50 ">
    <div class=" mx-3 pt-1  rounded-md h-[100%] grid grid-col-1 gap-8  ">
    <div class="px-2 py-2 h-full w-full bg-gray-50 ">
    <Nav/>  
    </div>
    <div>
    <Card/>
    </div>
    <div>
    <Revenue/>
    </div>
    <div>
      <PieTotal/>
    </div>
    <div>
    <Product/>
    </div>
    <div>
      <Column/>
    </div>
    <div>
      <Commingsoon/>
    </div>
    <div>
      <Weekly/>
    </div>
    <div>
      <Branding/>
    </div>
    <div class=" text-center mb-6">
      <div>
      © 2021 All rights reserved by Wrappixel.com
      </div>
    </div>
    </div> 
    </div>
  )
}
