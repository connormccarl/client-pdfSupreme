import React, {useEffect} from 'react';
import ReverseDrop from '../pages/reverse/ReverseDrop';
import ReverseHero from '../pages/reverse/ReverseHero';
import FeaturesReverse from '../pages/reverse/FeaturesReverse';
import HowToReverse from '../pages/reverse/HowToReverse';

const ReversePage = () => {
    useEffect(() => {
        document.title = 'Reverse - PDF_Supreme';
      }, []);
      const heading = "Reverse PDF";
      const subHeading = "Reverse your PDF easily within seconds."
    return (
        <>
            <ReverseHero heading = {heading} subHeading = {subHeading}/>
            <ReverseDrop />
            <FeaturesReverse/>
            <HowToReverse/>
        </>)
}

export default ReversePage