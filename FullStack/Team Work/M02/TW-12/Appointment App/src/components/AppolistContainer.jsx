const AppolistContainer = ({ patients, setPatients }) => {
  const consulted = (id) => {
    const updatePatients = patients.map((item) =>
      item.id === id ? { ...item, consulted: !item.consulted } : item
    );
    setPatients(updatePatients);
  };
  return (
    <div className="container">
      <h3>Appointment List</h3>

      {patients.map((patient) => (
        <div
        style={{borderLeft: patient.consulted ? "10px solid blueviolet":"none"}}
          onDoubleClick={() => consulted(patient.id)}
          key={patient.id}
          className="row patient"
        >
          <div className="col-4 left">
            <p className="patient-name">{patient.patient}</p>
            <p className="doctor-name">{patient.doctor}</p>
          </div>
          <div className="col-4 center">
            <p className="date">Date: {patient.day.toLocaleDateString()}</p>
            <p className="time">Time: {patient.day.toLocaleTimeString()}</p>
            {patient.consulted && <p className="consulted">CONSULTED</p>}
          </div>
          <div className="col-4 right">
            <a
              onClick={() =>
                setPatients(patients.filter((b) => b.id !== patient.id))
              }
              className="appo-x mx-2"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="12" fill="red" />
                <path
                  d="M8 8 L16 16 M16 8 L8 16"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppolistContainer;
