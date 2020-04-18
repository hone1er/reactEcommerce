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
        alignment="flex-start"
        theme={{ main: "#444444", secondary: "#e3e3e3" }}
        displayButton="true"
      />
    </div>
  );
}

export default HomePage;
