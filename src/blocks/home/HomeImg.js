import React from 'react';
import { imagesUrl } from '../../utils/urls';

const HomeImg = ({homeInfo}) => {
    return (
        <div id="img" className="block spacer p-top-xl">
            <div className="img-no-wrap-1">
                <div className="img object-fit">
                    <div className="object-fit-cover">
                        <img src={imagesUrl + homeInfo?.secondBaner?.url} alt="Beglaryan center" />
                    </div>
                </div>

                <div className="img-no-wrap-bg-color"></div>
            </div>
        </div>
    );
};

export default HomeImg;