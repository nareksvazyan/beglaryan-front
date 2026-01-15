import React, { useEffect, useState, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useTranslation } from "react-i18next";
import { getDepartmentsList } from "../../api/services/departments.service";
import { imagesUrl } from "../../utils/urls";

const ServicesHome = ({ location }) => {
  const swiperRef = useRef(null);
  const { t } = useTranslation();

  const currentLang = location?.pathname?.split("/")[1] || "hy";
  const [departmentsList, setDepartmentsList] = useState([]);

  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
    };
    getDepartmentsList(params)
      .then((res) => setDepartmentsList(res.data || []))
      .catch((err) => console.error("Failed to load departments:", err));
  }, [currentLang]);

  useEffect(() => {
    // Initialize swiper once departmentsList loaded
    if (departmentsList.length === 0) return;

    // Clean up previous swiper instance
    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
      swiperRef.current = null;
    }

    swiperRef.current = new Swiper(
      ".adv-slider-services .adv-swiper-container",
      {
        slidesPerView: "auto",
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        noSwipingClass: "adv-swiper-no-swiping",
        containerModifierClass: "adv-swiper-container-",
        slideClass: "adv-swiper-slide",
        slideBlankClass: "adv-swiper-slide-invisible-blank",
        slideActiveClass: "adv-swiper-slide-active",
        slideDuplicateActiveClass: "adv-swiper-slide-duplicate-active",
        slideVisibleClass: "adv-swiper-slide-visible",
        slideDuplicateClass: "adv-swiper-slide-duplicate",
        slideNextClass: "adv-swiper-slide-next",
        slideDuplicateNextClass: "adv-swiper-slide-duplicate-next",
        slidePrevClass: "adv-swiper-slide-prev",
        slideDuplicatePrevClass: "adv-swiper-slide-duplicate-prev",
        wrapperClass: "adv-swiper-wrapper",
        // disable built-in navigation so no pointer conflicts
        // navigation: {
        //   nextEl: ".adv-2-swiper-button-next",
        //   prevEl: ".adv-2-swiper-button-prev",
        // },
      }
    );

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, [departmentsList]);

  // Handlers for prev/next buttons
  const slidePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  const slideNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section id="services" className="block spacer p-top-xl">
      <div className="adv-slider-services">
        <div className="adv-swiper-container">
          <div className="adv-swiper-wrapper services-items clearfix">
            {departmentsList.map((item, key) => (
              <a
                key={key}
                title={item.title}
                className="adv-swiper-slide services-item"
                href={`/${currentLang}/departments/${item?.department_id}`}
              >
                <div className="services-item-content">
                  <h3 className="services-item-t-head uppercasText">
                    {item.title}
                  </h3>
                  <span className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space">
                    {t("readMore")}
                  </span>
                </div>

                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img
                      src={imagesUrl + item?.smallBaner?.url}
                      alt={item.title}
                    />
                  </div>
                </div>

                <div className="img-bg-color"></div>
              </a>
            ))}
          </div>

          {/* Manual prev/next buttons with handlers */}
          <div
            className="adv-2-swiper-button-prev"
            style={{ cursor: "pointer" }}
            onClick={slidePrev}
          >
            <span>
              <span className="btn btn-lg btn-before-horbar btn-link border-0 min-w-auto">
                {t("previous")}
              </span>
            </span>
          </div>

          <div
            className="adv-2-swiper-button-next"
            style={{ cursor: "pointer" }}
            onClick={slideNext}
          >
            <span>
              <span className="btn btn-lg btn-after-horbar btn-link border-0 p-0 min-w-auto">
                {t("next")}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
