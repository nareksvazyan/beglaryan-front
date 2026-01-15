import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleCommon from '../blocks/page-title/PageTitleCommon';
import DepartmentsContent from "../blocks/departments/DepartmentsContent"; 

const Departments = () => {
    document.body.classList.add('archive');

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Beglaryan Medical Center</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Explore our medical departments and expert care options." />
                <meta name="keywords" content="Departments, Medical, Health Services" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header logoColor="dark" />

            <main id="main" className="site-main">
                <PageTitleCommon title="departments" classname='highligthText'/>

                <div id="page-content" className="spacer p-top-xl">
                    <DepartmentsContent />
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Departments;