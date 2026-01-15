import React, { Fragment, useState,useEffect } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
import ContactForm from "../components/form/ContactForm";

import GoogleMaps from "../blocks/google-maps/GoogleMaps";
import ContactsInside from "../blocks/contacts/ContactsInside";
import { t } from "i18next";
import { getContactInfo } from "../api/services/contact.service";
import { useLocation } from "react-router-dom";

const Contacts = () => {
  const location = useLocation();  
  const [contactInfo, setContactInfo] = useState();
  const currentLang = location.pathname.split("/")[1] || "hy";
  document.body.classList.add("page");
  useEffect(() => {
    const params = {
      locale: currentLang,
      populate: "*",
    };
    getContactInfo(params).then((res) => setContactInfo(res?.data));
  }, [currentLang]);
  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Beglaryan Medical Center</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header logoColor="dark" />

      <main id="main" className="site-main">
        <PageTitleCommon title="contacts" classname='highligthText' />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <div className="content">
              <div className="clearfix">
                <GoogleMaps />

                <div className="spacer p-top-xl">
                  <div className="title">
                    <h2>{t("letsTalk")}</h2>
                  </div>

                  <div className="row gutter-width-sm with-pb-xl spacer p-top-lg">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <ContactsInside  contactInfo={contactInfo}/>
                    </div>

                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                      <div className="contact-form-shortcode">
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Contacts;
