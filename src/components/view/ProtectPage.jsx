import React, { useEffect } from 'react';
import HeroProtect from '../pages/protect/HeroProtect';
import DropProtect from '../pages/protect/DropProtect';
import FeaturesProtect from '../pages/protect/FeaturesProtect';
import HowtoProtect from '../pages/protect/HowtoProtect';


const ProtectPage = () => {
    
    useEffect(() => {
        document.title = 'Protect - PDF_Supreme';
      }, []);

    const heading = "Password Protect PDF";
    const subHeading = "Encrypt your PDF with a password so it can't be removed."
    return (
        <>
            <HeroProtect heading={heading} subHeading={subHeading} />
            <DropProtect />
            <FeaturesProtect />
            <HowtoProtect />
        </>
    )
}

export default ProtectPage