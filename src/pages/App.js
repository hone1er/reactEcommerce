import React from "react";
import "./App.css";
import Hero from "../components/Hero/heroStandard";

function App() {
  return (
    <div className="App">
      <Hero
        href="/tshirts"
        title="benal"
        subtitle="make sure you support local artist, stupid"
        alignment="flex-start"
        theme={{ main: "black", secondary: "white" }}
        displayButton="true"
      />
    </div>
  );
}

export default App;
