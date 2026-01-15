const getNavItems = (lang = "hy") => {
  const isMobile = window.innerWidth <= 780;

  const navItems = [
    { titleKey: "home", path: `/${lang}/` },
    { titleKey: "about", path: `/${lang}/about-us` },
    { titleKey: "team", path: `/${lang}/team` },
    { titleKey: "gallery", path: `/${lang}/gallery` },
    { titleKey: "news", path: `/${lang}/news`, match: [`/${lang}/news`, `/${lang}/news-inside`] },
    { titleKey: "contacts", path: `/${lang}/contacts` },
  ];

  if (isMobile) {
    navItems.splice(2, 0, {
      titleKey: "departments",
      path: `/${lang}/departments`,
    });
  }

  return navItems;
};

export default getNavItems;
