import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
import AboutOurDoctors from "../blocks/about/AboutOurDoctors";
import AboutImg from "../blocks/about/AboutImg";
import TeamIntro from "../blocks/about/TeamIntro";
import { useLocation } from "react-router-dom";
import { getTeamPageinfo } from "../api/services/team.service";

const Team = () => {
  document.body.classList.add("page");
  const location = useLocation();
  const [teamPageInfo, setTeamPageInfo] = useState();
  const currentLang = location.pathname.split("/")[1] || "hy";

  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
      
    };
    getTeamPageinfo(params).then((res) => setTeamPageInfo(res.data));
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Beglaryan Medical Center</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Meet our experienced and dedicated team of doctors at Beglaryan Medical Center."
        />
        <meta
          name="keywords"
          content="Doctors, Medical Team, Beglaryan Medical Center"
        />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header logoColor="dark" />

      <main id="main" className="site-main">
        <PageTitleCommon title="team" classname='highligthText'/>

        <div id="page-content" className="spacer p-top-xl">
          <div className="content">
            <div className="clearfix">
              {/* <AboutImg aboutSectionInfo={teamPageInfo} /> */}
              {/* <TeamIntro teamPageInfo={teamPageInfo} /> */}
              <AboutOurDoctors />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Team;
