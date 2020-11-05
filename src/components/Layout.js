import React, { useState } from "react";
import PropTypes from "prop-types";

import "assets/stylesheets/application.scss";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Header from "components/Header";
import Seo from "components/Seo";

const Layout = ({ children, pageName, title, description }) => {
  const [navbarVisible, setnavbarVisible] = useState(false);
  let className = "";

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  const showNavbar = () => setnavbarVisible(!navbarVisible);

  return (
    <>
      <Seo
        bodyAttributes={{ class: className }}
        title={title}
        description={description}
      />
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
