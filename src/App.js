import React from "react";

import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
    </>
  );
}

export default App;
