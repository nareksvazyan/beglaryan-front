import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getDepartmentsList } from "../../api/services/departments.service";
import { imagesUrl } from "../../utils/urls";
// import ServicesContentItemsData from "../../data/services/servicesContentItems";

const DepartmentsContent = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const currentLang = location.pathname.split("/")[1] || "hy";
  const [departmentsList, setDepartmentsList] = useState();
 
  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
    };
    getDepartmentsList(params).then((res) => setDepartmentsList(res.data));
  }, [currentLang]);
  return (
    <div className="wrapper">
      <div className="content">
        <div className="row gutter-width-sm with-pb-sm services-items">
          {departmentsList &&
            departmentsList.map((item, key) => {

              return (
                <div key={key} className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <a
                    title={item.title}
                    className="services-item"
                    href={`/${currentLang}/departments/${item?.department_id}`}
                  >
                    <div className="services-item-content">
                      <h3 className="services-item-t-head">{item.title.toUpperCase()}</h3>

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
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsContent;
