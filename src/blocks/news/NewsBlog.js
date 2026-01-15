import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNewsList } from "../../api/services/newsPage.service";
import { imagesUrl } from "../../utils/urls";

const NewsBlog = () => {
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] || "hy";
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
    };
    getNewsList(params).then((res) => setNewsList(res.data));
  }, [currentLang]);

  return (
    <div className="row gutter-width-sm with-pb-lg">
      {newsList?.map((item, key) => {
        const isBlog = item.news_type === "blog";
        const href = isBlog ? item.link : `/${currentLang}/news/${item.news_id}`;

        return (
          <div key={key} className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="card card-post">
              <div className="card-top position-relative">
                <a
                  title={item.title}
                  href={href}
                  target={isBlog ? "_blank" : "_self"}
                  rel={isBlog ? "noopener noreferrer" : undefined}
                >
                  <div className="img object-fit overflow-hidden">
                    <div className="object-fit-cover transform-scale-h">
                      <img
                        className="card-top-img"
                        src={imagesUrl + item?.image?.url}
                        alt={item.imgAlt || item.title}
                      />
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">
                  <a
                    title={item.title}
                    href={href}
                    target={isBlog ? "_blank" : "_self"}
                    rel={isBlog ? "noopener noreferrer" : undefined}
                  >
                    <p className="card-text">{item.title}</p>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsBlog;
