import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import SearchIcon from "../img/search-white.svg";

const Separator = styled.div`
  padding-bottom: 24px;
`

const SearchIconText = ({ link, children }) => (
  <Link to={link}>
    <img alt="search" src={SearchIcon} />
    <br />
    {children}
    <Separator />
  </Link>
);

export default SearchIconText;
