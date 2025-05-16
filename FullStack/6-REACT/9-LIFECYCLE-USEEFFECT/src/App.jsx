import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LifeCycleMethods from "./LifeCycleMethods";
import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="container text-center mt-4">
      <button onClick={() => setShow(!show)} className="btn btn-danger">
        SHOW
      </button>
      {/* {show && <LifeCycleMethods />} */}
      {show && <Clock />}
    </div>
  );
}

export default App;
