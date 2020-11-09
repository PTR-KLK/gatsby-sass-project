import React from "react";

const Footer = ({ changeTheme, darkMode }) => {
  return (
    <footer>
      <label>
        <input
          type="checkbox"
          onChange={changeTheme}
          defaultChecked={darkMode}
        />
        Dark Mode
      </label>
      <p>&copy; {new Date().getFullYear()}, My Gatsby Site</p>
    </footer>
  );
};

export default Footer;
