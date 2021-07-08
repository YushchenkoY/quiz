import Quiz from './components/Quiz';
import Logo from "./img/logo.png";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo"src={Logo} alt={"logo"} />
      </header>

      <Quiz />


    </div>
  );
}

export default App;

