import React from 'react'
import { HeroSection } from '../HeroSection'
import {Cards} from '../Cards'
import { Policy } from '../Policy'
import { Expect } from '../Expect'
import {PackagesCards} from "../PackagesCards";
import { OurKayaks } from '../OurKayaks'
import { CardExpect } from '../CardExpect'



export const Home = () => {
  return (
    <>
    <HeroSection />
    {/* <Cards /> */}
    <PackagesCards/>
    <OurKayaks/>
    <CardExpect/>
    {/* <Expect/> */}
  </>
  )
}
