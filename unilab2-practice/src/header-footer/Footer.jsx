import { styled } from "styled-components";
import fb from "../assets/Facebook - Negative.png";
import insta from "../assets/Instagram - Negative.png";
import twitter from "../assets/Twitter - Negative.png";
import youtube from "../assets/YouTube - Negative.png";
import Logo from "../assets/Frame.svg";

export default function Footer() {
  return (
    <FooterDiv>
      <SubscribeDiv>
        <SubscribeText>
          Register now so you don't miss our programs
        </SubscribeText>
        <EmailDiv>
          <Email type="text" placeholder="Enter Your Email" />
          <SubscribeBtn>Subscribe Now</SubscribeBtn>
        </EmailDiv>
      </SubscribeDiv>
      <FooterNav>
        <NavItem>Home</NavItem>
        <NavItem>Category</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </FooterNav>
      <IconsDiv>
        <Icon src={fb} />
        <Icon src={twitter} />
        <Icon src={insta} />
        <Icon src={youtube} />
      </IconsDiv>
      <hr />
      <LogoImg src={Logo} />
      <TermsPolicy>Terms of Service Privacy Policy</TermsPolicy>
      <Copyright>© 2022 Monito. All rights reserved.</Copyright>
    </FooterDiv>
  );
}

const FooterDiv = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    102.87deg,
    #fceed5 6.43%,
    #fceed5 78.33%,
    #ffe7ba 104.24%
  );
  padding: 10px;
  margin-top: 25px;
`;
const SubscribeDiv = styled.div`
  padding: 10px;
  background-color: #003459;
  border-radius: 12px;
`;
const SubscribeText = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: #fff;
`;
const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 12px;
  background-color: #fff;
  gap: 15px;
  margin-top: 15px;
`;
const Email = styled.input`
  height: 40px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #99a2a5;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;

  &::placeholder {
    color: #99a2a5;
  }
`;
const SubscribeBtn = styled.button`
  background: #003459;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #fdfdfd;
  text-align: center;
`;
const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 35px;
`;
const NavItem = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;
const IconsDiv = styled.div`
  display: flex;
  gap: 35px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const LogoImg = styled.img`
  width: 115px;
  height: 40px;
  margin: auto;
  margin-top: 25px;
`;
const TermsPolicy = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #667479;
  text-align: center;
  margin-top: 20px;
`;
const Copyright = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  margin-top: 10px;
`;
