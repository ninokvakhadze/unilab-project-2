import { styled } from "styled-components";
import Logo from "../assets/Frame.svg";
import burgerMenu from "../assets/Hamburger_MD.svg";

export default function Header() {
  return (
    <HeaderDiv>
      <Rectangle></Rectangle>
      <LogoImg src={Logo} />
      <img src={burgerMenu} />
    </HeaderDiv>
  );
}

const HeaderDiv = styled.header`
  background: linear-gradient(
    102.87deg,
    #fceed5 6.43%,
    #fceed5 78.33%,
    #ffe7ba 104.24%
  );
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;
`;

const LogoImg = styled.img`
  z-index: 1;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 635px;
  height: 635px;
  top: -640px;
  left: -240px;
  border-radius: 0px 0px 0px 61px;
  opacity: 0px;
  transform: rotate(300deg);
  z-index: 0;
  background: #f7dba7;
`;
