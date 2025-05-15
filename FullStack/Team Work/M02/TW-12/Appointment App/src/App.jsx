import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import AppolistContainer from "./components/AppolistContainer";
import { appointmentData, doctorData } from "./helper/data";

function App() {
  const [patients,setPatients]=useState(appointmentData)
  
  return (
    <div className="page">
      <header>
        <Header />
      </header>
      <main>
        <section className="doctors">
          <CardContainer patients={patients} setPatients={setPatients} data={doctorData} />
        </section>
        <section className="appointment">
          <AppolistContainer patients={patients} setPatients={setPatients} />
        </section>
      </main>
    </div>
  );
}

export default App;
