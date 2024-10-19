import { styled } from "styled-components";
import Logo from "../assets/Frame.svg";
import burgerMenu from "../assets/Hamburger_MD.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <HeaderDiv location={location.pathname}>
      <LogoImg src={Logo} />
      <img src={burgerMenu} />
    </HeaderDiv>
  );
}

const HeaderDiv = styled.header`
  background: ${(props) =>
    props.location == "/"
      ? `linear-gradient(
           102.87deg,
           #fceed5 6.43%,
           #fceed5 78.33%,
           #ffe7ba 104.24%
         )`
      : "#fff"};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`;

const LogoImg = styled.img`
  z-index: 1;
`;
