import React from "react";
import { useTranslation } from "react-i18next";

const ContactsInside = ({ contactInfo }) => {
  const { t } = useTranslation();
  return (
    <div className="contacts">
      <div className="contacts-items">
        <div className="contacts-item">
          <div className="contacts-item-description">
            <div className="contacts-item-title">
              <h6>{t("email")}</h6>
            </div>
            <p>
              <a href="mailto:beglaryanclinic@gmail.com">
                {contactInfo?.email}
              </a>
            </p>
          </div>
        </div>

        <div className="contacts-item">
          <div className="contacts-item-title">
            <h6>{t("address")}</h6>
          </div>
          <div className="contacts-item-description">
            <p>{contactInfo?.address}</p>
          </div>
        </div>

        <div className="contacts-item">
          <div className="contacts-item-title">
            <h6>{t("phone")}</h6>
          </div>
          <div className="contacts-item-description">
            {contactInfo?.phone?.split(",").map((phone, index) => (
              <p style={{marginBottom:"1rem"}} key={index}>
                <a href={`tel:${phone.trim()}`}>{phone.trim()}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsInside;
