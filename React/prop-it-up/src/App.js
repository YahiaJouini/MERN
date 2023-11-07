import PersonCard from "./components/PersonCard";
function App() {
  return (
    <div className="App">

      <div className="card">
        <PersonCard firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} />
      </div>

      <div className="card">
        <PersonCard firstName={"Smith"} lastName={"John"} age={88} hairColor={"Brown"} />
      </div>

      <div className="card">
        <PersonCard firstName={"Fillmore"} lastName={"millard"} age={50} hairColor={"Brown"} />
      </div>

      <div className="card">
        <PersonCard firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"} />
      </div>

    </div>
  );
}

export default App;
