import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { sendMessage } from "../../api/services/sendmessageservice";
import { getDepartmentsList } from "../../api/services/departments.service";
import { useLocation } from "react-router-dom";
const ContactForm = () => {
  const { t } = useTranslation();
  const location = useLocation();
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
  const [values, setValues] = useState({
    full_name: "",
    service: "",
    phone: "",
    message: "",
    email: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const payload = {
      ...values,
    };

    try {
      await sendMessage(payload);
      setSuccessMessage(t("messageSent"));

      setValues({
        full_name: "",
        service:"",
        phone: "",
        message: "",
        email: "",
      });

      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (err) {
      console.error("Message send failed:", err);
      setErrorMessage(t("messageFailed"));
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  return (
    <form
      method="post"
      id="cf-1"
      className="contact-form"
      onSubmit={submitForm}
    >
      <div className="form-group form-group-xs">
        <p className="input-group gutter-width-xs no-space">
          <span className="gutter-width">
            <input
              name="full_name"
              type="text"
              className="form-control form-lg"
              value={values.full_name}
              onChange={handleInputChange}
              placeholder={t("fullName")}
              required
            />
          </span>
          <span className="gutter-width">
            <select
              name="service"
              value={values.service}
              onChange={handleInputChange}
              className="form-control form-lg"
              required
            >
              <option value="" disabled hidden>
                {t("services")}
              </option>

              {departmentsList?.map((dept) => (
                <option key={dept?.department_id} value={dept?.title} >
                  {dept?.title.toUpperCase()}
                </option>
              ))}
            </select>
          </span>
        </p>
      </div>

      <div className="form-group form-group-xs">
        <p className="input-group gutter-width-xs no-space">
          <span className="gutter-width">
            <input
              name="phone"
              type="text"
              className="form-control form-lg"
              value={values.phone}
              onChange={handleInputChange}
              placeholder={t("phone")}
              required
            />
          </span>
          <span className="gutter-width">
            <input
              name="email"
              type="email"
              className="form-control form-lg"
              value={values.email}
              onChange={handleInputChange}
              placeholder={t("email")}
            />
          </span>
        </p>
      </div>

      <div className="form-group form-group-xs">
        <textarea
          name="message"
          className="form-control form-lg"
          value={values.message}
          onChange={handleInputChange}
          placeholder={t("message")}
        ></textarea>
      </div>

      {errorMessage && (
        <div className="alert alert-danger animated fadeIn">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="alert alert-success animated fadeIn">
          {successMessage}
        </div>
      )}

      <div className="form-group form-group-xs mb-0" style={{marginTop:"20px"}}>
        <button type="submit" className="btn btn-primary">
          {t("book")}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
