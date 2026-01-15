import React from 'react';

const NewsSingleImg = ({image}) => {

    return (
        <div className="img object-fit">
            <div className="object-fit-cover">
                <img src={ image} alt="Beglaryan Medical Center" />
            </div>
        </div>
    );
};

export default NewsSingleImg;