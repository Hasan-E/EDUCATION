import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { hastaData, doctorData } from "../helper/Data";
import AddPatient from "../components/AddPatient";
import PatientList from "../components/PatientList";

const Home = () => {
  //   console.log(doctorData);

  let [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  const [patients, setPatients] = useState(hastaData);
  const [flag, setFlag] = useState(true);
  const handleDrClick = (drId) => {
    // tamircilerde (setDoctors setHastalar) sıralama önemliyse,(doctors dizisinin tek elemana düşmesi önce olmalı) ilk olmasını istediğimizi, önce kendisine atayıp sonra tamircinin içine yazmalıyız. yoksa hata alırız
    doctors = doctors.filter((a) => a.id === drId);
    setDoctors(doctors);
    setFlag(false);
    setPatients(hastalar.filter((a) => a.myDoctor === doctors[0].doctorName));
  };
  const handleXClick = () => {
    setFlag(true);
    setDoctors(doctorData);
    setPatients(hastalar);
  };

  return (
    <div style={{ display: flag ? "block" : "flex" }}>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          {!flag && (
            <FaTimesCircle onClick={() => handleXClick()} className="x" />
          )}
          <div className="dr">
            {doctors.map((dr) => (
              <div key={dr.id}>
                <img
                  className="doctorBtn"
                  style={{ background: flag ? "aqua" : "lightgreen" }}
                  src={dr.doctorImg}
                  alt=""
                  width="180px"
                  height="150px"
                  onClick={() => handleDrClick(dr.id)}
                />
                <h4
                  style={{
                    background: flag ? "aqua" : "lightgreen",
                    borderLeft: flag ? "10px solid blue" : "10px solid green",
                  }}
                >
                  {dr.doctorName}{" "}
                </h4>
              </div>
            ))}
          </div>
        </header>
        {!flag && (
          <AddPatient
            doctors={doctors}
            hastalar={hastalar}
            setHastalar={setHastalar}
            patients={patients}
            setPatients={setPatients}
          />
        )}
      </div>
      <PatientList
        patients={patients}
        setHastalar={setHastalar}
        setPatients={setPatients}
        hastalar={hastalar}
      />
    </div>
  );
};

export default Home;
