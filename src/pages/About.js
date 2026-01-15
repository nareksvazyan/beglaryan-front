import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
// import AboutReviews from '../blocks/about/AboutReviews';
import AboutImg from "../blocks/about/AboutImg";
import AboutUs from "../blocks/about/AboutUs";
import AboutContactUs from "../blocks/about/AboutContactUs";
import { useLocation } from "react-router-dom";
import { getAboutSectionInfo } from "../api/services/aboutPage.service";

const About = () => {
  document.body.classList.add("page");
  const location = useLocation();
  const [aboutSectionInfo, seAboutSectionInfo] = useState();
  const currentLang = location.pathname.split("/")[1] || "hy";

  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
    };
    getAboutSectionInfo(params).then((res) => seAboutSectionInfo(res.data));
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

      <Header logoColor="dark" />

      <main id="main" className="site-main">
        <PageTitleCommon title="about" classname='highligthText' />

        <div id="page-content" className="spacer p-top-xl">
          <div className="content">
            <div className="clearfix">
              <AboutImg aboutSectionInfo={aboutSectionInfo?.image?.url} />

              <AboutUs aboutSectionInfo={aboutSectionInfo} />

              {/* <AboutOurDoctors /> */}

              {/* <AboutReviews /> */}

              <AboutContactUs />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default About;
