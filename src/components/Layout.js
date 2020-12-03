import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useDarkMode from "use-dark-mode";

import "assets/stylesheets/application.scss";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Header from "components/Header";
import Seo from "components/Seo";

const Layout = ({ children, pageName, title, description }) => {
  const [navbarVisible, setnavbarVisible] = useState(false);
  const isDarkMode = window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches;
  const darkMode = useDarkMode(isDarkMode);

  useEffect(() => {
    document.body.classList.add(`page-${pageName}`);
    return () => document.body.classList.remove(`page-${pageName}`);
  }, [pageName]);

  const showNavbar = () => setnavbarVisible(!navbarVisible);

  return (
    <>
      <Seo title={title} description={description} />
      <div className="wrapper">
        <button onClick={showNavbar}>☰</button>
        <Header />
        <Navbar navbarVisible={navbarVisible} />
        <main>{children}</main>
        <Footer changeTheme={darkMode.toggle} darkMode={darkMode.value} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
