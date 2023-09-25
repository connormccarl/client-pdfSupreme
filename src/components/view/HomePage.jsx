import React, { useEffect } from 'react';
import Hero from '../pages/home/Hero'
import Tools from '../pages/home/Tools'
import SimpleTasks from '../pages/home/SimpleTasks'
import GetOnMobile from '../pages/home/GetOnMobile'
import Pricing from '../pages/home/Pricing'
import WhyChooseUs from '../pages/home/WhyChooseUs'
import TryForFree from '../pages/home/TryForFree'


const HomePage = () => {

  useEffect(() => {
    document.title = 'Home - PDF_Supreme';
  }, []);
  
  return (
    <>
      <Hero />
      <Tools />
      <SimpleTasks />
      <GetOnMobile />
      <Pricing />
      <WhyChooseUs />
      <TryForFree />
    </>
  )
}

export default HomePage