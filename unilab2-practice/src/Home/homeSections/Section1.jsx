import { styled } from "styled-components";
import woman from "../../assets/woman.png";
import play from "../../assets/Play_Circle.png";

export default function Section1() {
  return (
    <Section>
      <Rectangle></Rectangle>
      <Section1Head>
        <TitleDiv>
          <Section1Title>One More Friend</Section1Title>
          <TitleDecor></TitleDecor>
        </TitleDiv>
        <SecondTitleDiv>
          <Section1Title2>Thousands More Fun!</Section1Title2>
          <Title2DecorDiv>
            <Decor1></Decor1>
            <Decor2></Decor2>
          </Title2DecorDiv>
        </SecondTitleDiv>
        <Section1Text>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </Section1Text>
        <ButtonDiv>
          <IntroButton>
            view intro <img src={play} />
          </IntroButton>
          <ExploreButton>Explore Now</ExploreButton>
        </ButtonDiv>
      </Section1Head>
      <Section1Bottom>
        <Img src={woman} />
        <ImgDecorDiv>
          <ImgDecor1></ImgDecor1>
          <ImgDecor2></ImgDecor2>
        </ImgDecorDiv>
      </Section1Bottom>
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(
    102.87deg,
    #fceed5 6.43%,
    #fceed5 78.33%,
    #ffe7ba 104.24%
  );
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 0px;
  overflow: hidden;
  border-radius: 0px 0px 20px 20px;
  /* position: relative; */
`;
const Section1Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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

const TitleDiv = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`;
const Section1Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  font-weight: 800;
  line-height: 50px;
  text-align: left;
  color: #002a48;
  z-index: 1;
`;

const TitleDecor = styled.div`
  width: 14.63px;
  height: 14.63px;
  margin-left: -13px;
  border-radius: 4px;
  transform: rotate(-20.79deg);
  background-color: #f7dba7;
  z-index: 0;
`;
const SecondTitleDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
const Section1Title2 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 38px;
  text-align: left;
  color: #002a48;
`;
const Title2DecorDiv = styled.div``;
const Decor1 = styled.div`
  width: 15.93px;
  height: 15.93px;
  border-radius: 4px;
  transform: rotate(9.62deg);
  background-color: #f7dba7;
`;
const Decor2 = styled.div`
  width: 12.44px;
  height: 12.44px;
  border-radius: 4px;
  transform: rotate(30.59deg);
  background-color: #002a48;
  margin-top: -12px;
`;
const Section1Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #242b33;
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
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
const Section1Bottom = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const ImgDecorDiv = styled.div``;
const ImgDecor1 = styled.div`
  position: absolute;
  width: 528.98px;
  height: 528.98px;
  right: -250px;
  bottom: -250px;
  z-index: 0;
  border-radius: 48px;
  transform: rotate(5.37deg);
  background-color: #003459;
`;

const ImgDecor2 = styled.div`
  position: absolute;
  width: 528.98px;
  height: 528.98px;
  border-radius: 48px;
  opacity: 0px;
  transform: rotate(25.23deg);
  background-color: #f7dba7;
  right: -300px;
  bottom: -248px;
  z-index: 1;
`;
const Img = styled.img`
  width: 500px;
  height: 386px;
  z-index: 2;
`;
