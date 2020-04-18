import React from "react";
import "./App.css";
import Hero from "../components/Hero/heroStandard";

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
    </div>
  );
}

export default HomePage;
