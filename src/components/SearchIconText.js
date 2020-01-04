import { Link } from "gatsby";
import React from "react";
import SearchIcon from "../img/search-white.svg";
import Separator from "./Separator";

const SearchIconText = ({ link, children }) => (
  <>
    <Link to={link}>
      <img alt="search" src={SearchIcon} />
      <br />
      {children}
    </Link>
    <Separator height="24px" />
  </>
);

export default SearchIconText;
