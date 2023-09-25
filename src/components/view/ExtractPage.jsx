import React, {useEffect} from 'react';
import HeroExtract from '../pages/extract/HeroExtract';
import DropExtract from '../pages/extract/DropExtract';
import FeaturesExtract from '../pages/extract/FeaturesExtract';
import HowtoExtract from '../pages/extract/HowtoExtract';


const ExtractPage = () => {
    useEffect(() => {
        document.title = 'Extract - PDF_Supreme';
      }, []);
      const heading = "Extract PDF";
      const subHeading = "Extract your PDF easily within seconds."
    return (
        <>
            <HeroExtract heading = {heading} subHeading = {subHeading}/>
            <DropExtract />
            <FeaturesExtract/>
            <HowtoExtract/>
        </>)
}

export default ExtractPage;