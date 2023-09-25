import React, { useEffect } from 'react';
import MergDrop from '../pages/merg/MergDrop'
import HeroMerg from '../pages/merg/HeroMerg'
import FeaturesMerge from '../pages/merg/FeaturesMerge'
import CombinePdf from '../pages/merg/CombinePdf'

const MergePage = () => {

  useEffect(() => {
    document.title = 'Merge - PDF_Supreme';
  }, []);
  
  return (
    <>
      <HeroMerg />
      <MergDrop />
      <FeaturesMerge />
      <CombinePdf />
    </>
  )
}

export default MergePage