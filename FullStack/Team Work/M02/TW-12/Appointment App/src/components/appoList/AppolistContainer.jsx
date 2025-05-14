const AppolistContainer = ({ data }) => {
  return (
    <div className="container">
      <h3>Appointment List</h3>

      {data.map((appointment) => (
        <div key={appointment.id} className="row patient">
          <div className="col-4 left">
            <p className="patient-name">{appointment.patient}</p>
            <p className="doctor-name">{appointment.doctor}</p>
          </div>
          <div className="col-4 center">
            <p className="date">Date: {appointment.day.toLocaleDateString()}</p>
            <p className="time">Time: {appointment.day.toLocaleTimeString()}</p>
          </div>
          <div className="col-4 right">
            <a className="appo-x mx-2" role="button">
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
          {/* <p className="consulted">CONSULTED</p> */}
        </div>
      ))}
    </div>
  );
};

export default AppolistContainer;
