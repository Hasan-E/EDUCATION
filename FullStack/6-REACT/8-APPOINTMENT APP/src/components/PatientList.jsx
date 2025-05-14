import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const PatientList = ({ setHastalar, setPatients, patients, hastalar }) => {
  const handleBtnClick = (patient) => {
    setHastalar(hastalar.filter((b) => b.id !== patient.id));
    setPatients(patients.filter((b) => b.id !== patient.id));
  };
  return (
    <div>
      {patients.map((patient) => (
        <div
          className={patient.isDone ? "trueStil" : "falseStyle"}
          key={patient.id}
        >
          <div>
            <h2>{patient.patientName}</h2>
            <h4>{patient.day}</h4>
            <h3> {patient.myDoctor} </h3>
          </div>
          <FaTimesCircle
            onClick={() => handleBtnClick(patient)}
            style={{ color: "red" }}
          />
        </div>
      ))}
    </div>
  );
};

export default PatientList;
