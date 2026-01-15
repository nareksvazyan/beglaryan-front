import React from "react";

const NewsDescription = ({ newsInfo }) => {
  return (
    <div className="single-news-container">
      <div className="title">
        <h2>{newsInfo?.title}</h2>
      </div>

      <div className="description clearfix">
        {newsInfo?.text && <p>{newsInfo.text}</p>}

        {/* Render options if available */}
        {Array.isArray(newsInfo?.options) && newsInfo.options.length > 0 && (
          <ul className="news-options">
            {newsInfo.options.map((option, index) => (
              <li key={index}>{option?.title}</li>
            ))}
          </ul>
        )}

        {/* ✅ Render article_section if it's an array of objects */}
        {newsInfo?.article_section && (
          <div>
            {/* Main top text */}
            <p>{newsInfo.article_section.text}</p>

            {/* Sections */}
            {Array.isArray(newsInfo.article_section.sections) &&
              newsInfo.article_section.sections.map((item, index) => (
                <div
                  key={index}
                  className="article-section"
                  style={{ paddingTop: "30px" }}
                >
                  {item.paragraph && (
                    <p style={{ marginBottom: "1rem",color:"#000", fontWeight:"500" }}>{item.paragraph}</p>
                  )}

                  {Array.isArray(item.list) && item.list.length > 0 && (
                    <ul>
                      {item.list.map((listItem, liIndex) => (
                        <li key={liIndex}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        )}

        {newsInfo?.footer_text && <p>{newsInfo.footer_text}</p>}
      </div>
    </div>
  );
};

export default NewsDescription;
