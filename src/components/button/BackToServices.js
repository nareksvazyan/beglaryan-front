import React from 'react';
import { useTranslation } from 'react-i18next';

const BackToServices = () => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  return (
    <div id="back-to-services" className="block spacer p-top-xl">
      <div className="text-center">
        <a href={`/${currentLang}/departments`} className="btn btn-primary">
          {t('departments')}
        </a>
      </div>
    </div>
  );
};

export default BackToServices;
