import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const ContactUsHome = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] || "hy";
  return (
    <section id="contact-us" className="block spacer p-top-xl">
      <div className="bg-gray-light spacer p-top-xl p-bottom-xl contact-us-border-no">
        <div className="wrapper text-center">
          <div className="title">
            <h2>{t("letsTalk")}</h2>
          </div>

          <a href={`/${currentLang}/contacts`} className="btn btn-primary">
            {t("contactUs")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHome;
