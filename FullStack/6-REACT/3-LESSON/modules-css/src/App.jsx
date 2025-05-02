import Card from "./components/card";
import data from "./data";

function App() {
  console.log(data);

  return (
    <div>
      <h1>LANGUAGES</h1>
      {data.map((item) => (
        <Card language={item.language} img={item.img} />
      ))}
      {/* <Card language={data[0].language} img={data[0].img} />
      <Card language={data[1].language} img={data[1].img} />
      <Card language={data[2].language} img={data[2].img} /> */}
    </div>
  );
}

export default App;
