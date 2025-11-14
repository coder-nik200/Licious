import React from 'react'
import Currenthits from '../components/currenthits'
import FreshWaterPalms from '../components/FreshWaterPalms'
import Advertisement from '../components/Advertisement'
import { Categories } from '../components/Categories'
import SpotLight from '../components/SpotLight'
import MuttonData from '../components/MuttonData'
import Delectdish from '../components/DelectableTreats'
import Customers from '../components/Customer'

const Home = () => {
  return (
     <>
     <Advertisement/>
      <Currenthits/>
      <FreshWaterPalms/>
      <Categories />
      <MuttonData/>
      <Delectdish/>
      <SpotLight />
      <Customers/>
     </>
  )
}

export default Home
