import "./App.css";
import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverFocus from "./components/HoverFocus";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typography from "./components/Typography";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center text-green-700 font-bold underline">
        Hello Tailwind!
      </h1>

      {/* <Typography /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverFocus/> */}
      <FlexAndResponsive/>
    </>
  );
}

export default App;
