import React from 'react';
import { imagesUrl } from '../../utils/urls';

const AboutImg = ({aboutSectionInfo}) => {
    return (
        <div id="about-us-img" className="block wrapper-normal">
            <div className="wrapper">
                <div className="about-img">
                    <div className="img object-fit">
                        <div className="object-fit-cover">
                            <img src={imagesUrl + aboutSectionInfo} alt="About us" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutImg;
