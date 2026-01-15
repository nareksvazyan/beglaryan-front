import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { imagesUrl } from "../../utils/urls";

const PageTitleHome = ({ homeInfo }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const currentLang = location.pathname.split("/")[1] || "hy";
  return (
    <section
      id="page-title"
      className="block with-img"
      style={{
        backgroundImage: `url(${imagesUrl}${homeInfo?.baner?.url})`,
      }}
    >
      <div className="wrapper text-center d-flex">
        <div className="align-self-center w-100 uppercasText">
          <div
            className="title"
            style={{ width: "75%", margin: "0 auto", fontWeight: "700" }}
          >
            <h1
              className="medium"
              style={{
                fontWeight: "700",
                fontSize: "2.5rem",
                width: "85%",
                margin: "0 auto",
              }}
            >
              {homeInfo?.text}
            </h1>
          </div>

          {/* <div className="description spacer p-top-lg">
            <p>We care for you health. So, 99% of our clients recommend us.</p>
          </div> */}

          <div className="spacer p-top-lg no-space">
            <a href={`/${currentLang}/about-us `} className="btn btn-primary">
              {t("readMore")}
            </a>
          </div>
        </div>
      </div>

      <div className="page-title-bg-color"></div>
    </section>
  );
};

export default PageTitleHome;
