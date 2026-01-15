import React from "react";
import HeaderLogo from "../../blocks/logo/HeaderLogo";
import MenuModal from "../../components/modal/MenuModal";
import Actions from "../actions/Actions";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ModalMenuLanguages from "../menu/ModalMenuLanguages";

const Header = ({ logoColor }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const currentLang = location.pathname.split("/")[1] || "hy";

  return (
    <header id="header" className="site-header">
      <div className="wrapper">
        <div className="header-content d-flex justify-content-between">
          <div className="header-left align-self-center">
            <div className="links">
              <div className="links-items">
                <div className="links-item">
                  <a
                    href={`/${currentLang}/departments`}
                    className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto uppercasText"
                  >
                    {t("departments")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="header-center align-self-center">
            <HeaderLogo logoColor={logoColor} />
          </div>

          <div className="header-right d-flex justify-content-end">
            <div className="d-flex align-items-center ">
              <MenuModal />
            </div>
            <div className="language-switcher d-none d-md-block">
              <ModalMenuLanguages />
            </div>

            <Actions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
