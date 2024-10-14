import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header-footer/Header";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`

 *{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  }

  body{
    height: 100vh;
    overflow-x: hidden;
  }

  `;
