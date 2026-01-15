import React from "react";
import { useLocation } from "react-router-dom";
import logoLight from "../../assets/img/logo/logo-light.png";
import logoDark from "../../assets/img/logo/logo-dark.png";

const HeaderLogo = ({ logoColor }) => {
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] || "en"; 
  const logoMap = {
    dark: logoDark,
    light: logoLight,
  };
  return (
    <div className="header-logo">
      <a
        className="logo logo-primary transform-scale-h"
        title="Logo"
        href={`/${currentLang}/`}
      >
        <img src={logoMap[logoColor] || logoDark} alt="Logo" />
      </a>
    </div>
  );
};

export default HeaderLogo;
