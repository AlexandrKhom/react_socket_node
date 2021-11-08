import './App.css';
import { CurrentlyInfo } from "./components/CurrentlyInfo";
import { ProminentAppBar } from "./components/Header/ProminentAppBar";


function App() {

  return (
    <div className="App">
      <ProminentAppBar/>
      <CurrentlyInfo/>
    </div>
  );
}

export default App;
