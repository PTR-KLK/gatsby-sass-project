import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "assets/stylesheets/application.scss";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Header from "components/Header";

const Layout = ({ children, pageName }) => {
  const [navbarVisible, setnavbarVisible] = useState(false);
  let className = "";

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  const showNavbar = () => setnavbarVisible(!navbarVisible);

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Gatsby Site</title>
      </Helmet>
      <div className="wrapper">
        <button onClick={showNavbar}>☰</button>
        <Header />
        <Navbar navbarVisible={navbarVisible} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
