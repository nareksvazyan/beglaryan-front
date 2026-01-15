import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTeamList } from "../../api/services/team.service";

import { imagesUrl } from "../../utils/urls";
const priorityNames = {
  hy: [
    "Արտաշես Բեգլարյան",
    "Արմինե Հարությունյան",
    "Նունե Շահվերդյան",
    "Ալլա Մակարյան",
    "Իզաբելլա Բեգլարյան",
    "Վարդգես  Օսիպով"
  ],
  en: [
    "Artashes Beglaryan",
    "Armine Harutyunyan",
    "Nune Shahverdyan",
    "Alla Makaryan",
    "Izabella Beglaryan",
    "Vardges Osipov"
  ],
  ru: [
    "Арташес Бегларян",
    "Армине Арутюнян",
    "Нунэ Шахвердян",
    "Алла Макарян",
    "Изабелла Бегларян",
    "Варгес Осипов"
  ],
};

const AboutOurDoctors = () => {
  const location = useLocation();
  const [teamList, setTeamList] = useState();
  useEffect(() => {
    if (!location?.pathname) return;

    const lang = location.pathname.split("/")[1] || "hy";

    const params = {
      locale: lang,
      populate: "*",
      "pagination[limit]": 100,
    };

    getTeamList(params).then((res) => {
      const doctors = res.data || [];
      const priority = priorityNames[lang] || [];

      const normalize = (name) => name?.trim().toLowerCase();

      const sortedDoctors = [...doctors].sort((a, b) => {
        const aIndex = priority.findIndex(
          (p) => normalize(p) === normalize(a.name)
        );
        const bIndex = priority.findIndex(
          (p) => normalize(p) === normalize(b.name)
        );

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        return 0;
      });

      setTeamList(sortedDoctors);
    });
  }, [location]);

  return (
    <div id="our-doctors" className="block spacer p-top-md">
      <div className="wrapper">
        <div className="row gutter-width-sm with-pb-md">
          {teamList &&
            teamList.map((doctor, key) => {
              return (
                <div key={key} className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="team-member">
                    <div className="team-member-top">
                      <div className="img object-fit">
                        <div className="object-fit-cover">
                          <img
                            src={imagesUrl + doctor?.image?.url}
                            alt={doctor.name}
                          />
                        </div>
                      </div>

                      <div
                        className="team-member-position"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <p style={{ fontSize: "16px" }}>{doctor?.department}</p>
                        <p style={{ fontSize: "14px" }}>{doctor?.position}</p>
                      </div>
                    </div>

                    <div className="team-member-content">
                      <h4 className="team-member-t-head">{doctor.name}</h4>

                      {/* <div className="team-member-description">
                        <p>{doctor.description}</p>
                      </div> */}
                    </div>

                    {/* <nav className="team-member-nav-items">
                      <ul className="nav">
                        <li className="nav-item">
                          <a title="Facebook" href={doctor.FbLink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>

                        <li className="nav-item">
                          <a title="LinkedIn" href={doctor.LiLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>

                        <li className="nav-item">
                          <a title="Instagram" href={doctor.IgLink}>
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>

                        <li className="nav-item">
                          <a title="Twitter" href={doctor.TwLink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </nav> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AboutOurDoctors;
