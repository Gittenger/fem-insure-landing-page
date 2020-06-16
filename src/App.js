import React from "react";

import Header from "./components/header/header.component";
import HeaderMobile from "./components/headerMobile/headerMobile.component";
import Hero from "./components/hero/hero.component";
import FeaturesSection from "./components/featuresSection/featuresSection.component";
import Cta from "./components/cta/cta.component";
import Footer from "./components/footer/footer.component";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeaderMobile />
      {/* <Hero /> */}
      <FeaturesSection />
      {/* <Cta />
      <Footer /> */}
    </>
  );
}

export default App;
