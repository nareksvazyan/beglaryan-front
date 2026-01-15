import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Actions = () => {
  const {t} = useTranslation()
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] || "hy";

  return (
    <div className="actions">
      <div className="actions-items">
        <a className="actions-item" href={`/${currentLang}/contacts`}>
          <span className="uppercasText">{ t('reservation')}</span>
        </a>
      </div>
    </div>
  );
};

export default Actions;
