import React, { useEffect } from 'react';
import HeroRotate from '../pages/rotate/HeroRotate';
import DropRotate from '../pages/rotate/DropRotate';
import FeaturesRotate from '../pages/rotate/FeatureRotate';
import HowtoRotate from '../pages/rotate/HowtoRotate';

const RotatePage = () => {

  useEffect(() => {
    document.title = 'Rotate - PDF_Supreme';
  }, []);

  const heading = "Rotate PDF";
  const sub_heading = "Rotate and save your PDF online for free"
  return (
    <>
      <HeroRotate heading={heading} sub_heading={sub_heading} />
      <DropRotate />
      <FeaturesRotate />
      <HowtoRotate />
    </>
  )
}

export default RotatePage