import { styled } from "styled-components";
import Section1 from "./homeSections/section1";
import Section2 from "./homeSections/section2";
import Section3 from "./homeSections/Section3";
import Section4 from "./homeSections/Section4"

export default function Home() {
  return (
    <HomeDiv>
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4/>
    </HomeDiv>
  );
}

const HomeDiv = styled.div``;
