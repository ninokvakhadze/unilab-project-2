import { styled } from "styled-components";
import play from "../../assets/Play_Circle.png";
import woman from "../../assets/12bf9db02e233aa64a34946d9a9aed4d.png";

export default function Section3() {
  return (
    <Section3Div>
      <Section3Card>
        <BackgroundDiv1></BackgroundDiv1>
        <BackgroundDiv2></BackgroundDiv2>
        <Section3CardTitle>One More Friend</Section3CardTitle>
        <Section3Title2>Thousands more fun!</Section3Title2>
        <Section3CardText>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </Section3CardText>
        <ButtonDiv>
          <IntroButton>
            view intro <img src={play} />
          </IntroButton>
          <ExploreButton>Explore Now</ExploreButton>
        </ButtonDiv>
        <WomanImg src={woman} />
      </Section3Card>
    </Section3Div>
  );
}

const Section3Div = styled.div`
  padding: 10px;
`;
const Section3Card = styled.div`
  background-color: #003459;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 0px;
  height: 635px;
  border-radius: 20px;
`;
const Section3CardTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: 800;
  line-height: 54px;
  text-align: center;
  position: relative;
  z-index: 1;
  color: #003459;
`;
const Section3Title2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: 15px;
  color: #002a48;
`;
const Section3CardText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: 10px;
  width: 325px;
  color: #242b33;
`;
const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
  z-index: 1;
  margin-top: 25px;
`;
const IntroButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 8px;
  border-radius: 25px;
  border: 2px solid #003459;
  color: #003459;
  background: linear-gradient(
    102.87deg,
    #fceed5 6.43%,
    #fceed5 78.33%,
    #ffe7ba 104.24%
  );
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
`;

const ExploreButton = styled.button`
  display: flex;
  align-items: center;
  padding: 11px 23px;
  gap: 8px;
  border-radius: 25px;
  color: #fff;
  background: #003459;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  border: none;
`;
const BackgroundDiv1 = styled.div`
  position: absolute;
  border-radius: 75px;
  transform: rotate(11deg);
  background-color: #fceed5;
  z-index: 0;
  width: 605.03px;
  height: 635px;
  top: -324px;
  left: -199.37px;
`;
const BackgroundDiv2 = styled.div`
  position: absolute;
  z-index: 0;
  width: 787.54px;

  height: 787.54px;
  bottom: -650px;
  border-radius: 99px;
  transform: rotate(28.25deg);
  background-color: #002a48;
`;
const WomanImg = styled.img`
  width: 524px;
  height: 349px;
  z-index: 1;
  margin-top: 30px;
`;
