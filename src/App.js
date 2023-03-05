import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/CreativeOxana"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oxana Chiziţcaia
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/CreativeOxana/WeatherReactApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://cute-mochi-a0aeb2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
