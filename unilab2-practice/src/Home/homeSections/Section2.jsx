import { styled } from "styled-components";
// import dogs from "../../dogs.json";
import dog from "../../assets/dog.png";
import arrow from "../../assets/Chevron_Right_MD.png";

export default function Section2() {
  return (
    <Section2Div>
      <Section2SmallTitle>Whats new?</Section2SmallTitle>
      <Section2Title>Take A Look At Some Of Our Pets</Section2Title>
      <Section2Items>
        <ItemDiv>
          <DogImg src={dog} />
          <DogName>MO231 - Pomeranian White</DogName>
          <DogGenderAge>Gene: Male</DogGenderAge>
          <DogGenderAge>Age: 02 Month</DogGenderAge>
          <DogPrice>6.900.000 VND</DogPrice>
        </ItemDiv>
        <ItemDiv>
          <DogImg src={dog} />
          <DogName>MO231 - Pomeranian White</DogName>
          <DogGenderAge>Gene: Male</DogGenderAge>
          <DogGenderAge>Age: 02 Month</DogGenderAge>
          <DogPrice>6.900.000 VND</DogPrice>
        </ItemDiv>
        <ItemDiv>
          <DogImg src={dog} />
          <DogName>MO231 - Pomeranian White</DogName>
          <DogGenderAge>Gene: Male</DogGenderAge>
          <DogGenderAge>Age: 02 Month</DogGenderAge>
          <DogPrice>6.900.000 VND</DogPrice>
        </ItemDiv>
        <ItemDiv>
          <DogImg src={dog} />
          <DogName>MO231 - Pomeranian White</DogName>
          <DogGenderAge>Gene: Male</DogGenderAge>
          <DogGenderAge>Age: 02 Month</DogGenderAge>
          <DogPrice>6.900.000 VND</DogPrice>
        </ItemDiv>
      </Section2Items>
      <ViewBtn>
        View more <img src={arrow} />
      </ViewBtn>
    </Section2Div>
  );
}

const Section2Div = styled.div`
  padding: 10px;
`;
const Section2SmallTitle = styled.h4`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #000000;
`;
const Section2Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: #003459;
`;
const Section2Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4%;
  row-gap: 20px;
`;
const ItemDiv = styled.div`
  width: 48%;
  box-shadow: 0px 4px 28px -2px #00000014;
  background: #fdfdfd;
  padding: 10px;
  border-radius: 16px;
`;
const DogImg = styled.img`
  width: 100%;
  border-radius: 12px;
`;
const DogName = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: #00171f;
`;
const DogGenderAge = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #667479;
`;
const DogPrice = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
`;
const ViewBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 16px;
  padding: 14px 28px 10px 28px;
  gap: 8px;
  border-radius: 57px;
  border: 1.5px solid #003459;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #003459;
  margin-top: 15px;
  background-color: #fff;
`;
