import React, { useEffect } from 'react';
import HeroDelete from '../pages/delete/HeroDelete';
import DropDelete from '../pages/delete/DropDelete';
import FeaturesDelete from '../pages/delete/FeaturesDelete';
import HowtoDelete from '../pages/delete/HowtoDelete';

const DeletePage = () => {
    useEffect(() => {
        document.title = 'Delete - PDF_Supreme';
    }, []);
    const heading = "Delete PDF";
    const subHeading = "Delete your PDF easily within seconds."
    return (
        <>
            <HeroDelete heading={heading} subHeading={subHeading} />
            <DropDelete />
            <FeaturesDelete />
            <HowtoDelete />
        </>)
}

export default DeletePage;