import React, { useEffect, useState, Fragment } from "react";
import { getImagesList } from "../../api/services/gallery.service";
import { imagesUrl } from "../../utils/urls";

const SwipeBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(1);
  const [xPos, setXPos] = useState(0);
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    document.documentElement.classList.add("swipebox-no-touch");
    const params = {
      populate: "*",
    };

    getImagesList(params)
      .then((res) => {
        setImagesList(res?.data?.images);
      })
      .catch((err) => {
        console.error("Error fetching gallery items:", err);
      });

    const handleKeyDown = (e) => {
      if (!open) return;
      if (e.keyCode === 37 && xPos !== 0) swipeLeft();
      if (e.keyCode === 39 && index < imagesList.length) swipeRight();
      if (e.keyCode === 27) close();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.classList.remove("swipebox-no-touch");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, index, xPos, imagesList.length]);

  const handleClick = (e, key) => {
    e.preventDefault();
    document.documentElement.classList.add("swipebox-html");
    document.body.style.overflow = "hidden";

    setOpen(true);
    setIndex(key + 1);
    setXPos((key + 1) * -100 + 100);

    if (key === 0) {
      const prev = document.getElementById("swipebox-prev");
      if (prev) prev.classList.add("disabled");
    }
    if (key === imagesList.length - 1) {
      const next = document.getElementById("swipebox-next");
      if (next) next.classList.add("disabled");
    }
  };

  const swipeLeft = () => {
    const prev = document.getElementById("swipebox-prev");
    const next = document.getElementById("swipebox-next");
    if (prev) prev.classList.remove("disabled");
    if (next) next.classList.remove("disabled");

    setXPos((prevX) => prevX + 100);
    setIndex((prevIndex) => prevIndex - 1);

    if (xPos === 0 && prev) prev.classList.add("disabled");
  };

  const swipeRight = () => {
    const prev = document.getElementById("swipebox-prev");
    const next = document.getElementById("swipebox-next");
    if (prev) prev.classList.remove("disabled");
    if (next) next.classList.remove("disabled");

    setXPos((prevX) => prevX - 100);
    setIndex((prevIndex) => prevIndex + 1);

    if (xPos <= imagesList.length * -100 + 100 && next)
      next.classList.add("disabled");
  };

  const close = () => {
    setOpen(false);
    const prev = document.getElementById("swipebox-prev");
    const next = document.getElementById("swipebox-next");
    if (prev) prev.classList.remove("disabled");
    if (next) next.classList.remove("disabled");
    document.documentElement.classList.remove("swipebox-html");
    document.body.style.overflow = "auto";
  };

  return (
    <Fragment>
      {imagesList.map((image, key) => (
        <div key={key} className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <a
            onClick={(e) => handleClick(e, key)}
            title={image.title || `Image ${key + 1}`}
            className="gallery-item swipebox"
            href={imagesUrl + image?.url}
            rel="gallery"
          >
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img
                  src={imagesUrl + image?.url}
                  alt={image.title || `Image ${key + 1}`}
                />
              </div>
            </div>
            <div className="img-bg-color"></div>
          </a>
        </div>
      ))}

      <div id="swipebox-overlay" style={{ display: open ? "block" : "none" }}>
        <div id="swipebox-container">
          <div
            id="swipebox-slider"
            style={{
              display: "block",
              transform: `translate3d(${xPos}%, 0px, 0px)`,
            }}
          >
            {imagesList.map((image, key) => (
              <div
                key={key}
                className={`slide ${index === key + 1 ? "current" : ""}`}
              >
                <img src={imagesUrl + image?.url} alt={` ${key + 1}`} />
              </div>
            ))}
          </div>

          <div id="swipebox-top-bar">
            <div id="swipebox-title">{imagesList[index - 1]?.title || ""}</div>
          </div>

          <div id="swipebox-bottom-bar">
            <div id="swipebox-arrows">
              <div id="swipebox-prev" onClick={swipeLeft}></div>
              <div id="swipebox-next" onClick={swipeRight}></div>
            </div>
          </div>

          <div id="swipebox-close" onClick={close}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default SwipeBoxComponent;
