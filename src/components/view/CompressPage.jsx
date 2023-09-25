import React, { useEffect } from 'react';
import HeroCompress from '../pages/compress/HeroCompress'
import CompressDrop from '../pages/compress/DropCompress'
import BestOnline from '../pages/compress/BestOnline'
import HowToCompress from '../pages/compress/HowToCompress'
import WorkFaster from '../pages/compress/Workfaster'
import Pricing from '../pages/home/Pricing'

const CompressPage = () => {

  useEffect(() => {
    document.title = 'Compress - PDF_Supreme';
  }, []);

  return (
    <>
      <HeroCompress />
      <CompressDrop />
      <BestOnline />
      <HowToCompress />
      <WorkFaster />
      <Pricing />
    </>
  )
}

export default CompressPage