import { styled } from "styled-components";
import woman from "../../assets/woman.png";

export default function Section1() {
  return (
    <Section>
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
      </Section1Head>
      <Section1Bottom>
        <ImgDecorDiv>
          <ImgDecor1></ImgDecor1>
          <ImgDecor2></ImgDecor2>
        </ImgDecorDiv>
        <Img src={woman}/>
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
  padding: 20px;
  padding-bottom: 0px;
`;
const Section1Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
const Section1Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
const ImgDecor1 = styled.div``;
const ImgDecorDiv = styled.div``
const ImgDecor2 = styled.div``;
const Img = styled.img`
  width: 500px;
  height: 386px;
`;
