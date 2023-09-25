import React, {useEffect} from 'react';
import JpgtoPdfHero from '../pages/jpg-pdf/JpgtoPdfHero';
import JpgtoPdfDrop from '../pages/jpg-pdf/JpgtoPdfDrop';
import JpgtoPdfFeatures from '../pages/jpg-pdf/JpgtoPdfFeatures';
import HowJpgtoPdf from '../pages/jpg-pdf/HowJpgtoPdf';



const JpgToPdfPage = () => {
    useEffect(() => {
        document.title = 'JPG to PDF - PDF_Supreme';
      }, []);
      const heading = "JPG to PDF";
      const subHeading = "Convert your JPG to PDF easily within seconds."
    return (
        <>
            <JpgtoPdfHero heading = {heading} subHeading = {subHeading}/>
            <JpgtoPdfDrop />
            <JpgtoPdfFeatures/>
            <HowJpgtoPdf/>
        </>)
}

export default JpgToPdfPage;