// import Container from "react-bootstrap/Container"
import { Container,Image } from "react-bootstrap";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Container className="text-center mt-5">
        <Header />
      </Container>
    </>
  );
}

export default App;
