import "./App.css";
import ClassComponent from "./components/class-component/ClassComponent";
import Events from "./components/event/Events";
import MoreData from "./components/useStateHook/MoreData";
import UseStateHook from "./components/useStateHook/UseStateHook";

function App() {
  // JS ALANI
  const selamla = () => {
    alert("Merhaba");
  };
  return (
    <>
      <div className="bg-warning text-center py-3">
        <h1>REACT EVENTS</h1>
        {/* <Events /> */}
        {/* <UseStateHook /> */}
        {/* <MoreData/> */}
        <ClassComponent/>
      </div>
    </>
  );
}

export default App;
