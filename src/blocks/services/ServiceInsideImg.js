import React from "react";
import { imagesUrl } from "../../utils/urls";

const ServiceInsideImg = ({ departmentInfo }) => {
  return (
    <div className="img-no-wrap-1">
      <div className="img object-fit">
        <div className="object-fit-cover">
          <img src={imagesUrl + departmentInfo?.banner?.url} alt="Cardiology" />
        </div>
      </div>
    </div>
  );
};

export default ServiceInsideImg;
