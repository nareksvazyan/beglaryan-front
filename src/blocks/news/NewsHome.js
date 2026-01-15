import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getNewsList } from "../../api/services/newsPage.service";

import { imagesUrl } from "../../utils/urls";

const NewsHome = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] || "hy";
  const [newsList, setNewsList] = useState();
  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
    };
    getNewsList(params).then((res) => setNewsList(res.data));
  }, [currentLang]);
  return (
    <section id="news" className="block spacer p-top-xl  p-bottom-xl">
      <div className="wrapper">
        <div className="title">
          <h2 className="hr uppercasText" style={{color:"#49adc5"}}>{t("news")}</h2>
        </div>

        <div className="row gutter-width-sm with-pb-lg">
          <div className="row gutter-width-sm with-pb-lg">
            {newsList?.slice(0, 3).map((item, key) => {
              return (
                <div key={key} className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="card card-post">
                    <div className="card-top position-relative">
                      <a
                        title={item?.title}
                        href={item?.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="img object-fit overflow-hidden">
                          <div className="object-fit-cover transform-scale-h">
                            <img
                              className="card-top-img"
                              src={imagesUrl + item?.image?.url}
                              alt={item.title}
                            />
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="card-body">
                      <h4 className="card-title">
                        <a
                          title={item.title}
                          href={item?.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="card-text">{item?.title}</p>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHome;
