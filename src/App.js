import React from "react";
import { TimeComponent } from "./TimeComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimeComponent delay={100} location="Europe/Berlin" />
        <TimeComponent delay={500} location="Europe/Lisbon" />
        <TimeComponent delay={1000} location="Asia/Brunei" />
        <TimeComponent delay={3000} location="Asia/Tokyo" />
        <TimeComponent delay={5000} location="Pacific/Palau" />
        <TimeComponent delay={10000} location="America/New_York" />
        <TimeComponent delay={20000} location="Australia/Melbourne" />
      </header>
    </div>
  );
}

export default App;
