import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const AboutContactUser = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] || "hy";
  return (
    <div id="contact-us" className="block spacer p-top-xl">
      <div className="bg-gray-light contact-us-bottom-no-space spacer p-top-xl p-bottom-xl">
        <div className="wrapper text-center">
          <div className="title">
            <h2>{t("letsTalk")}</h2>
          </div>

          <a href={`/${currentLang}/contacts`} className="btn btn-primary">
            {t("contactUs")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutContactUser;
