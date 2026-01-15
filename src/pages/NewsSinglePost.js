import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
import NewsSingleImg from "../blocks/news/NewsSingleImg";
import NewsDescription from "../blocks/news/NewsDescription";
import { useLocation, useParams } from "react-router-dom";
import { getNewsById } from "../api/services/newsPage.service";
import { imagesUrl } from "../utils/urls";
import { useTranslation } from "react-i18next";

const NewsSinglePost = () => {
  const { t } = useTranslation();
  document.body.classList.add("single-post");
  const [news, setNews] = useState();
  const location = useLocation();
  const { id } = useParams();
  const currentLang = location.pathname.split("/")[1] || "hy";
  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
    };
    getNewsById(id, params).then((res) => setNews(res.data[0]));
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
        <PageTitleCommon title={t("news")} classname='highligthText' />

        <div id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <div className="content">
              <div id="single">
                <div className="row gutter-width-lg">
                  <div className="col-xl-12 col-lg-12 col-md-12 single-content">
                    <NewsSingleImg image={imagesUrl + news?.baner?.url} />
                    <NewsDescription newsInfo={news} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default NewsSinglePost;
