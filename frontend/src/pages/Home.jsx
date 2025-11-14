import React from 'react'
import Currenthits from '../components/currenthits'
import FreshWaterPalms from '../components/FreshWaterPalms'
import Advertisement from '../components/Advertisement'
import { Categories } from '../components/Categories'
import SpotLight from '../components/SpotLight'

const Home = () => {
  return (
     <>
     <Advertisement/>
      <Categories />
      <Currenthits/>
      <FreshWaterPalms/>
      <SpotLight />
     </>
  )
}

export default Home
