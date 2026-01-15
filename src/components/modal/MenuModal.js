import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import HeaderLogo from "../../blocks/logo/HeaderLogo";
import ModalMenuPrimary from "../../blocks/menu/ModalMenuPrimary";
import ModalMenuLanguages from "../../blocks/menu/ModalMenuLanguages";
import Actions from "../../blocks/actions/Actions";

class MenuModal extends Component {
  constructor(context) {
    super(context);
    this.state = {
      showModal: false,
    };
  }

  open = () => {
    this.setState({ showModal: true });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  getCurrentLang = () => {
    const { pathname } = this.props.location;
    const lang = pathname.split("/")[1];
    return lang || "en"; // fallback if no lang in URL
  };

  render() {
    const { t } = this.props;
    const currentLang = this.getCurrentLang();

    return (
      <Fragment>
        <div className="menu-toggle">
          <button
            onClick={this.open}
            type="button"
            className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto uppercasText"
          >
            {t("menu")}
          </button>
        </div>

        <Modal
          className="modal fade"
          id="menu-modal"
          show={this.state.showModal}
          onHide={this.close}
          backdrop={false}
          aria-labelledby="menu-modal"
          aria-hidden="true"
          dialogClassName="modal-full"
          tabIndex="-1"
        >
          <div className="wrapper">
            <div className="modal-content">
              <div className="modal-header modal-header-top">
                <div className="header-content d-flex justify-content-between w-100">
                  <div className="header-left align-self-center">
                    <div className="links">
                      <div className="links-items">
                        <div className="links-item">
                          <a
                            href={`/${currentLang}/departments`}
                            className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto uppercasText"
                          >
                            {t("departments")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="header-center align-self-center">
                    <HeaderLogo logoColor="dark" />
                  </div>

                  <div className="header-right d-flex justify-content-end">
                    <div className="d-flex align-items-center">
                      <div className="menu-close-toggle">
                        <button
                          onClick={this.close}
                          type="button"
                          className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto uppercasText"
                        >
                          {t("closeMenu")}
                        </button>
                      </div>
                    </div>
                    <Actions />
                  </div>
                </div>
              </div>

              <div className="modal-body modal-body-centered">
                <div className="animated fadeinright w-100">
                  <ModalMenuPrimary />
                  <div className="language-switcher-sm">
                    <ModalMenuLanguages />
                  </div>
                  <div className="modal-text">
                    <p>© {new Date().getFullYear()} All rights reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default withRouter(withTranslation()(MenuModal));
