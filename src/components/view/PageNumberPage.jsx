import React, {useEffect} from 'react';
import PageNumberHero from '../pages/page_number/PageNumberHero';
import PageNumberDrop from '../pages/page_number/PageNumberDrop';
import FeaturesPageNumber from '../pages/page_number/FeaturesPageNumber';
import HowtoPageNumber from '../pages/page_number/HowtoPageNumber';


const PageNumberPage = () => {
    useEffect(() => {
        document.title = 'Page_Number - PDF_Supreme';
      }, []);
      const heading = "Page Number to PDF";
      const subHeading = "Add Page Numbers to your PDF easily within seconds."
    return (
        <>
            <PageNumberHero heading = {heading} subHeading = {subHeading}/>
            <PageNumberDrop />
            <FeaturesPageNumber/>
            <HowtoPageNumber/>
        </>)
}

export default PageNumberPage;