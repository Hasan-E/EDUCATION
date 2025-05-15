// import DoctorCard from "./DoctorCard";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const CardContainer = ({ data, setPatients, patients }) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const handleDrClick = (doctor) => {
    setVisible(!visible);
    setSelectedDoctor(doctor);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPatients([
      ...patients,
      {
        id: patients.length + 1,
        patient: name,
        day: new Date(day),
        consulted: false,
        doctor: selectedDoctor.name,
      },
    ]);
    setVisible(!visible);
  };

  return (
    <div className="container my-4">
      <h3>Our Doctors</h3>
      <div className="row">
        {data.map((doctor) => (
          <div
            key={doctor.id}
            className=" col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          >
            <div
              onClick={() => handleDrClick(doctor)}
              className="card h-100 shadow-none"
            >
              <div className="img-container">
                <img src={doctor.img} alt="" className="card-img-top" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.dep}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visible && (
        <div className="form-background">
          <Form onSubmit={handleSubmit} className="form">
            <a className="x" onClick={() => setVisible(!visible)}>
              <i className="bi bi-x"></i>
            </a>
            <Form.Group>
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                required
                autoFocus
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                onChange={(e) => setDay(e.target.value)}
                type="datetime-local"
                required
              />
            </Form.Group>

            <Form.Group className="buttons">
              <Button className="m-3" variant="primary" type="submit">
                Submit
              </Button>
              <Button
                onClick={() => setVisible(!visible)}
                variant="danger"
                type="button"
              >
                Close
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
