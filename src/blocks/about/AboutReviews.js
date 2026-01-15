import React, { useEffect, useState, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useTranslation } from "react-i18next";
import { getReviews } from "../../api/services/aboutPage.service";

const AboutReviews = () => {
  const thumbsRef = useRef(null);
  const textRef = useRef(null);
  const swiperTextRef = useRef(null);

  const [reviews, setReviews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageAbout, setPageAbout] = useState(false);

  const { t } = useTranslation();
  const currentLang = window.location.pathname.split("/")[1] || "hy";

  useEffect(() => {
    setPageAbout(window.location.pathname.includes("about-us"));

    const params = {
      locale: currentLang,
      populate: "*",
    };

    getReviews(params)
      .then((res) => {
        setReviews(res?.data || []);
      })
      .catch((err) => {
        console.error("Failed to load reviews", err);
      });
  }, [currentLang]);

  useEffect(() => {
    if (reviews.length && thumbsRef.current && textRef.current) {
      // destroy previous swiper if any
      if (swiperTextRef.current) {
        swiperTextRef.current.destroy(true, true);
        swiperTextRef.current = null;
      }

      const swiperThumbs = new Swiper(thumbsRef.current, {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });

      const swiperTextInstance = new Swiper(textRef.current, {
        thumbs: { swiper: swiperThumbs },
        allowTouchMove: false,
        navigation: {
          nextEl: ".adv-2-swiper-button-next",
          prevEl: ".adv-2-swiper-button-prev",
        },
        on: {
          slideChange() {
            setActiveIndex(this.realIndex);
          },
        },
      });

      swiperTextRef.current = swiperTextInstance;
    }
  }, [reviews]);

  const handleClick = (e, index) => {
    if (swiperTextRef.current) {
      swiperTextRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  const currentReview = reviews[activeIndex];
  if (!currentReview) return <div>Loading reviews...</div>;

  return (
    <div
      id="testimonials"
      className={`block spacer p-top-xl ${!pageAbout ? "bg-gray-light p-bottom-xl" : ""}`}
    >
      <div className="wrapper">
        <div className="title">
          <h2 className="hr uppercasText" style={{color:"#49adc5"}}>{t("review")}</h2>
        </div>

        <div className="adv-slider-reviews position-relative">
          <div className="adv-slider-reviews-img">
            <img src="/assets/img/demo/32_img.png" alt="Icon" />
          </div>

          <div
            ref={textRef}
            className="adv-swiper-container reviews-text swiper-container"
          >
            <div className="adv-swiper-wrapper reviews-text-items swiper-wrapper">
              {reviews.map((item, index) => (
                <div
                  key={index}
                  className={`adv-swiper-slide reviews-text-item swiper-slide`}
                >
                  <div className="reviews-text-item-content" style={{ width: "85%" }}>
                    {/* Optionally show only active review text */}
                    <p
                      className={`reviews-text ${
                        activeIndex === index ? "active" : "inactive"
                      }`}
                      style={{ fontSize: "24px", lineHeight: "1.6" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="d-flex align-items-center thumbs"
            style={{
              maxWidth: "85%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              ref={thumbsRef}
              className="adv-swiper-container reviews-thumbs swiper-container"
            >
              <div className="adv-swiper-wrapper reviews-thumbs-items swiper-wrapper">
                {reviews.map((_, index) => (
                  <div
                    key={index}
                    onClick={(e) => handleClick(e, index)}
                    className={`adv-swiper-slide reviews-thumbs-item swiper-slide ${
                      activeIndex === index ? "active" : ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="reviews-results">
              <h6 className="reviews-name">{currentReview.name}</h6>
              <p className="reviews-positions">{currentReview.position}</p>
            </div>
          </div>

          <div
            className="adv-2-swiper-button-prev"
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "calc(50% - 60px)",
              cursor: "pointer",
            }}
            onClick={() => swiperTextRef.current && swiperTextRef.current.slidePrev()}
          >
            <span className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">‹</span>
          </div>

          <div
            className="adv-2-swiper-button-next"
            style={{
              position: "absolute",
              bottom: "-40px",
              right: "calc(50% - 60px)",
              cursor: "pointer",
            }}
            onClick={() => swiperTextRef.current && swiperTextRef.current.slideNext()}
          >
            <span className="btn btn-lg btn-after-horbar btn-link border-0 p-0 min-w-auto">›</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutReviews;