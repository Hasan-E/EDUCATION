import React, { useState } from "react";

const AddPatient = ({
  setPatients,
  patients,
  hastalar,
  setHastalar,
  doctors,
}) => {
  const [pname, setPname] = useState("");
  const [day, setDay] = useState("");
  console.log(doctors);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHastalar([
      ...hastalar,
      {
        id: hastalar.length + 1,
        patientName: pname,
        day: day,
        isDone: false,
        myDoctor: doctors[0].doctorName,
      },
    ]);
    setPatients([
      ...patients,
      {
        id: patients.length + 1,
        patientName: pname,
        day: day,
        isDone: false,
        myDoctor: doctors[0].doctorName,
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setPname(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div>
          <button className="kayitBtn" type="submit">
            <span>{doctors[0].doctorName} </span> için kayıt oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
