import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <p>{title}!</p>
    </header>
  );
};
Header.defaultProps = {
  title: "Default List",
};
export default Header;
