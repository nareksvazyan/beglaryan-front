import React from "react";
import { useTranslation } from "react-i18next";

const ServiceInsidePriceLists = ({ departmentInfo }) => {
  const { t } = useTranslation();

  return (
    <div id="price-list" className="block spacer p-top-md">
      <div className="wrapper">
        <div className="price-list-item">
          {/* Sections List */}
          {departmentInfo?.sections?.length > 0 && (
            <>
              <div className="price-list-item-title">
                <h3>{t("services")}</h3>
              </div>
              <ul className="price-list-item-list-group list-group">
                {departmentInfo.sections.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span className="list-group-title">
                      <strong>{item.title}</strong>: {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Option List */}
          {departmentInfo?.option?.length > 0 && (
            <div className="price-list-item mt-5">
              <div className="price-list-item-title">
                <h3 >{departmentInfo.optionTitle}</h3>
              </div>
              <ul className="list-unstyled ps-0">
                {departmentInfo.option.map((item, index) => (
                  <li key={index} className="mb-4 ps-3" >
                    • {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Service Option (title + nested list) */}
          {departmentInfo?.serviceoption && (
            <div className="price-list-item mt-5">
              <div className="price-list-item-title">
                <h3>
                  {departmentInfo.serviceoption.title}
                </h3>
              </div>
              <ul className="list-unstyled ps-0">
                {departmentInfo.serviceoption.items?.map((item, index) => (
                  <li key={index} className="mb-4">
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <ul className="list-unstyled ps-3">
                      {item.options?.map((opt, i) => (
                        <li key={i} className="mb-4">
                          • {opt}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {departmentInfo?.footerText && (
        <div id="description" className="block spacer p-top-md">
          <div className="wrapper">
            <div className="description">
              <p>{departmentInfo?.footerText}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceInsidePriceLists;
