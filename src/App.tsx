import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import RoutesComponent from "./components/RoutesComponent";
import "./styles/App.css";

function App() {
  return (
    <>
      <NavBar />

      <div className="App">
        <RoutesComponent />
      </div>
    </>
  );
}

export default App;
