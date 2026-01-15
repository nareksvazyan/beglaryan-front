import React from "react";
import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import getNavItems from "../../data/nav-items/navItems";

const ModalMenuPrimary = ({ location }) => {
  const currentLang = location.pathname.split("/")[1] || "hy";

  const { t } = useTranslation();
  const buildHref = (path) => {
    if (!path.startsWith("/" + currentLang)) {
      return `/${currentLang}${path}`;
    }
    return path;
  };
const navItems = getNavItems(currentLang);
  const isActive = (matchPaths) => {
    return matchPaths?.some((p) =>
      location.pathname.includes(`/${currentLang}${p}`)
    );
  };

  return (
    <nav className="menu-primary">
      <ul className="nav">
        {navItems.map((item, index) => {
          const matchPaths = item.match || [item.path];
          const activeClass = isActive(matchPaths) ? "current-nav-item" : "";

          return (
            <li key={index} className={`nav-item  ${activeClass}`}>
              <a title={t(item.titleKey)} href={buildHref(item.path)} style={{textTransform:'uppercase',fontWeight:700}}>
                {t(item.titleKey)}
              </a>
              <div className="underline1"></div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(ModalMenuPrimary);
