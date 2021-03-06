import styled from "styled-components";
import { palette } from "../components/constants";

const Page = styled.div`
  background-color: ${({bgColor}) => bgColor || palette.red};
  text-align: center;
  min-height: 100vh;
`;

export default Page;
