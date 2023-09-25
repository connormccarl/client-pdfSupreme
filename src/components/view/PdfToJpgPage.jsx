import React, {useEffect} from 'react';
import PdftoJpgHero from '../pages/pdf-jpg/PdftoJpgHero';
import PdftoJpgDrop from '../pages/pdf-jpg/PdftoJpgDrop';
import PdftoJpgFeatures from '../pages/pdf-jpg/PdftoJpgFeatures';
import HowPdftoJpg from '../pages/pdf-jpg/HowPdftoJpg';




const PdfToJpgPage = () => {
    useEffect(() => {
        document.title = 'PDF to JPG - PDF_Supreme';
      }, []);
      const heading = "PDF to JPG";
      const subHeading = "Convert your PDf to JPG easily within seconds."
    return (
        <>
            <PdftoJpgHero heading = {heading} subHeading = {subHeading}/>
            <PdftoJpgDrop/>
            <PdftoJpgFeatures/>
            <HowPdftoJpg/>
        </>)
}

export default PdfToJpgPage;