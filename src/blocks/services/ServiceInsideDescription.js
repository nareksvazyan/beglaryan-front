import React from 'react';

const ServiceInsideDescription = ({departmentInfo}) => {

    return (
        <div id="description" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="description">
                    <p>{departmentInfo?.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceInsideDescription;