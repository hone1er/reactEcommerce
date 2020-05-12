import React from "react";
import "./App.css";
import Hero from "../components/Hero/heroStandard";
import { SaleDiv } from "../components/Sale";
function HomePage() {
  return (
    <div className="App">
      <Hero
        href="/tshirts"
        title="benal"
        subtitle="make sure you support local artist, stupid"
        alignment="center"
        theme={{ main: "#444444", secondary: "#e3e3e3" }}
        displayButton="true"
        image="https://source.unsplash.com/random/800x600"
      />
      
      <SaleDiv className="sale-div" theme={{ main: "#444444", secondary: "#e3e3e3" }}>
      <h2 className="top-header">silver lining sale</h2>
      <h1 className="bottom-header">40% off site wide</h1>
      <p className="code">use code: <span>BEN10</span></p>
      </SaleDiv>
    </div>
  );
}

export default HomePage;
