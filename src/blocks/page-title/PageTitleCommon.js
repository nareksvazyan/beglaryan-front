import React from "react";
import { useTranslation } from "react-i18next";

const PageTitleCommon = (props) => {
  const { t } = useTranslation();

  return (
    <div id="page-title">
      <div
        className={`wrapper text-center ${props.classname ? ` ${props.classname}` : ''}`}
        style={{ width: "75%", margin: "0 auto" }}
      >
        <h1 className="medium uppercasText" style={{ fontWeight: "700",fontSize:"2.5rem" }}>
          {t(props.title)}
        </h1>
      </div>
    </div>
  );
};

export default PageTitleCommon;
