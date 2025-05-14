import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import CardContainer from "./components/cards/CardContainer";
import AppolistContainer from "./components/appoList/AppolistContainer";
import { appointmentData, doctorData } from "./helper/data";

function App() {
  return (
    <div className="page">
      <header>
        <Header />
      </header>
      <main>
        <section className="doctors">
          <CardContainer data={doctorData} />
        </section>
        <section className="appointment">
          <AppolistContainer data={appointmentData} />
        </section>
      </main>
    </div>
  );
}

export default App;
