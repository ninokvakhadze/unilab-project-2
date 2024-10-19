import { styled } from "styled-components";
import dog from "../../assets/dog2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section4() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section4Div>
      <Section4SmallTitle>You already know ?</Section4SmallTitle>
      <Section4Title>Useful Pet Knowledge</Section4Title>
      <Slider {...settings}>
        <ItemDiv>
          <Img src={dog} />
          <ItemStat>Pet knowledge</ItemStat>
          <ItemTitle>
            What is a Pomeranian? How to Identify Pomeranian Dogs
          </ItemTitle>
          <ItemInfo>
            The Pomeranian, also known as the Pomeranian (Pom dog), is always in
            the top of the cutest pets. Not only that, the small, lovely, smart,
            friendly, and skillful circus dog breed.
          </ItemInfo>
        </ItemDiv>
        <ItemDiv>
          <Img src={dog} />
          <ItemStat>Pet knowledge</ItemStat>
          <ItemTitle>
            What is a Pomeranian? How to Identify Pomeranian Dogs
          </ItemTitle>
          <ItemInfo>
            The Pomeranian, also known as the Pomeranian (Pom dog), is always in
            the top of the cutest pets. Not only that, the small, lovely, smart,
            friendly, and skillful circus dog breed.
          </ItemInfo>
        </ItemDiv>
        <ItemDiv>
          <Img src={dog} />
          <ItemStat>Pet knowledge</ItemStat>
          <ItemTitle>
            What is a Pomeranian? How to Identify Pomeranian Dogs
          </ItemTitle>
          <ItemInfo>
            The Pomeranian, also known as the Pomeranian (Pom dog), is always in
            the top of the cutest pets. Not only that, the small, lovely, smart,
            friendly, and skillful circus dog breed.
          </ItemInfo>
        </ItemDiv>
      </Slider>
    </Section4Div>
  );
}

const Section4Div = styled.div`
  padding: 10px;
`;

const Section4SmallTitle = styled.h4`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #000000;
`;
const Section4Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: #003459;
`;
const ItemDiv = styled.div`
  padding: 10px;
  box-shadow: 0px 4px 28px -2px #00000014;
  border-radius: 16px;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 12px;
`;
const ItemTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #00171f;
  margin-top: 12px;
`;
const ItemStat = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  background-color: #00a7e7;
  width: 88px;
  border-radius: 28px;
  color: #fff;
  margin-top: 12px;
`;
const ItemInfo = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #242b33;
  margin-top: 12px;
`;
