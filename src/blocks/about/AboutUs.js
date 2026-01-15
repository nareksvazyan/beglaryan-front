import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getAboutSectionInfo,
  getMissonInfo,
} from "../../api/services/aboutPage.service";
import { imagesUrl } from "../../utils/urls";

const AboutUs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [pageAbout, setPageAbout] = useState(false);
  const [missionInfo, setMissionInfo] = useState();
  const [aboutInfo, setAboutInfo] = useState();

  const currentLang = location.pathname.split("/")[1] || "hy";

  useEffect(() => {
    setPageAbout(location.pathname.includes("about-us"));
  }, [location.pathname]);

  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
    };
    getAboutSectionInfo(params).then((res) => setAboutInfo(res?.data));
    getMissonInfo(params).then((res) => setMissionInfo(res?.data));
  }, [currentLang]);
  return (
    <div
      id="about-us"
      className={
        "block before-block spacer p-top-md " +
        (pageAbout ? "bg-gray-light p-bottom-md" : "")
      }
    >
      <div className="wrapper">
        {pageAbout ? (
          <div className="about-intro-section spacer p-top-md p-bottom-md">
            <div className="about-title mb-5">
              <h2 className="font-weight-bold uppercasText " style={{fontSize:"2.2rem", color:"#49adc5"}}>
                {aboutInfo?.mainTitle}
              </h2>
              <div className="underline"></div>
            </div>

            {aboutInfo?.description?.map((item, i) => (
              <div className="about-description mb-5" key={i}>
                <p>{item?.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="row gutter-width-sm with-pb-md">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="description-2 uppercasText" style={{fontSize:"2.2rem"}}>
                <h2 style={{ fontSize: "34px" }}>
                  {aboutInfo?.descriptionShort?.title}
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="description-2">
                <p>{aboutInfo?.descriptionShort?.text}</p>
              </div>
            </div>
          </div>
        )}
        {pageAbout && aboutInfo?.secondImage?.url && (
          <div className="spacer mt-5 mb-5 text-center">
            <img
              src={imagesUrl + aboutInfo?.secondImage?.url}
              alt="About section"
              className="img-fluid"
              style={{
                width: "100%",
                height: "750px",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        {pageAbout && (
          <div className="about-intro-section spacer p-top-md p-bottom-md">
            <div className="about-title mb-5">
              <h2 className="font-weight-bold description-2 uppercasText" style={{fontSize:"1.8rem" ,color:"#49adc5"}}>
                {t("misson")}
              </h2>
              <div className="underline"></div>
            </div>
            <div className="about-description">
              <p>{missionInfo?.description}</p>
            </div>
          </div>
        )}

        {pageAbout && (
          <div className="mission-section spacer p-top-md">
            <div className="about-title mb-5">
              <h2 className="font-weight-bold description-2 uppercasText" style={{fontSize: "1.8rem",color:"#49adc5"}}>
                {t("advantages")}
              </h2>
              <div className="underline"></div>
            </div>
            <div className="row gutter-width-sm with-pb-md">
              {missionInfo?.missionList?.map((item, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12 container-width">
                  <div className="mission-box bg-light rounded p-4 h-100">
                    <h5 className="font-weight-bold mb-3 d-flex align-items-center">
                      <i
                        className="fas fa-check-circle mr-2"
                        style={{ color: "#49adc5", fontSize: "1.2rem" }}
                      ></i>
                      {item.title}
                    </h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {pageAbout && (
          <div className="mission-section spacer p-top-md">
            <div className="about-title mb-5">
              <h2 className="font-weight-bold description-2 uppercasText" style={{fontSize:"2rem",color:"#49adc5"}}>
                {t("values")}
              </h2>
              <div className="underline"></div>
            </div>
            <div className="row gutter-width-sm with-pb-md">
              {missionInfo?.values?.map((item, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12 container-width">
                  <div className="mission-box bg-light rounded p-4 h-100">
                    <h5 className="font-weight-bold mb-3 d-flex align-items-center">
                      <i
                        className="fas fa-check-circle mr-2"
                        style={{ color: "#49adc5", fontSize: "1.2rem" }}
                      ></i>
                      {item.title}
                    </h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {pageAbout && aboutInfo?.thirdImage?.url && (
          <div className="spacer mt-5 mb-5 text-center">
            <img
              src={imagesUrl + aboutInfo?.thirdImage?.url}
              alt="About section"
              className="img-fluid"
              style={{
                width: "100%",
                height: "750px",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
