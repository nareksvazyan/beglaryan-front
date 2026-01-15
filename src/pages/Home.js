import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleHome from "../blocks/page-title/PageTitleHome";
import ServicesHome from "../blocks/services/ServicesHome";
import AboutUs from "../blocks/about/AboutUs";
import AboutReviews from "../blocks/about/AboutReviews";
// import AboutOurDoctors from "../blocks/about/AboutOurDoctors";
import HomeImg from "../blocks/home/HomeImg";
import NewsHome from "../blocks/news/NewsHome";
import ContactUs from "../blocks/home/ContactUsHome";
import { useLocation } from "react-router-dom";
import { getHomeInfo } from "../api/services/homePage.service";

const Home = () => {
  document.body.classList.add("home");
  document.body.classList.add("header-absolute-true");
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] || "hy";
  const [homeInfo, setHomeInfo] = useState();
  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
    };
    getHomeInfo(params).then((res) => setHomeInfo(res.data));
  }, [currentLang]);
  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Beglaryan Medical Center</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header logoColor="light" />

      <main id="main" className="site-main content-no-spacing">
        <div className="content">
          <div className="clearfix">
            <PageTitleHome homeInfo={homeInfo} />

            <AboutUs />

            <ServicesHome />
           
            <HomeImg homeInfo={homeInfo} />

            <NewsHome />
            <AboutReviews   />
            <ContactUs />
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
