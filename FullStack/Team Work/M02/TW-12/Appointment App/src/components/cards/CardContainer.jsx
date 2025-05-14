// import DoctorCard from "./DoctorCard";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const CardContainer = ({ data }) => {
  const [visible, setVisible] = useState(false);

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
              onClick={() => setVisible(!visible)}
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
          <Form className="form">
            <a className="x" onClick={() => setVisible(!visible)}>
              <i className="bi bi-x"></i>
            </a>
            <Form.Group>
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Day&Time</Form.Label>
              <Form.Control type="datetime-local" />
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
