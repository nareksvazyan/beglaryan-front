import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import ServiceInsideImg from "../blocks/services/ServiceInsideImg";
import ServiceInsideDescription from "../blocks/services/ServiceInsideDescription";
import ServiceInsidePriceLists from "../blocks/services/ServiceInsidePriceLists";
import PageTitleCommon from "../blocks/page-title/PageTitleCommon";

import BackToServices from "../components/button/BackToServices";
import { getDepartmentById } from "../api/services/departments.service";
import { useLocation, useParams } from "react-router-dom";

const ServicesInside = () => {
  document.body.classList.add("single");
  document.body.classList.add("single-adveits_services");
  const [departmentInfo, setDepartmentInfo] = useState();
  const location = useLocation();
  const { id } = useParams();
  const currentLang = location.pathname.split("/")[1] || "hy";
  useEffect(() => {
    const params = {
      populate:"*",
      selectionoption: {
        populate: ['slect',],
       
      },
      locale: currentLang,
    };
    getDepartmentById(id, params).then((res) => setDepartmentInfo(res.data[0]));
  }, [currentLang, id]);

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
        <PageTitleCommon title={departmentInfo?.title} classname='highligthText' />

        <div id="page-content" className="spacer p-top-xl">
          <div className="content">
            <div id="single">
              <div id="single-content">
                <div id="img" className="block wrapper-normal">
                  <div className="wrapper">
                    <ServiceInsideImg departmentInfo={departmentInfo} />
                  </div>
                </div>

                <ServiceInsideDescription departmentInfo={departmentInfo}/>

                <ServiceInsidePriceLists departmentInfo={departmentInfo} />

                <BackToServices />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ServicesInside;
