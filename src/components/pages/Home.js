import React from 'react'
import { HeroSection } from '../HeroSection'
import {Cards} from '../Cards'
import '../../index.css'
import { Policy } from '../Policy'


export const Home = () => {
  return (
    <>
    <HeroSection />
    <Cards />
    <Policy/>
  </>
  )
}
