import React, { useEffect } from 'react';
import HeroUnlock from '../pages/unlock/HeroUnlock';
import DropUnlock from '../pages/unlock/DropUnlock';
import FeaturesUnlock from '../pages/unlock/FeaturesUnlock';
import HowtoUnlock from '../pages/unlock/HowtoUnlock';


const UnlockPage = () => {

    useEffect(() => {
        document.title = 'Unlock - PDF_Supreme';
      }, []);

    const heading_unlock = "Unlock PDF";
    const sub_heading_unlock = "An easy-to-use online tool to remove passwords from PDFs."
    return (
        <>
            <HeroUnlock heading_unlock={heading_unlock} sub_heading_unlock={sub_heading_unlock} />
            <DropUnlock />
            <FeaturesUnlock />
            <HowtoUnlock />
        </>
    )
}

export default UnlockPage