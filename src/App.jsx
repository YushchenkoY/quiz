import Quiz from './components/Quiz';
import Logo from "./img/logo.png";
import openMenu from './img/icon-menu.png'
import Menu from './components/Menu';
import Result1 from './components/results/Result1';
import Result2 from './components/results/Result2';
import Result3 from './components/results/Result3';
import Result4 from './components/results/Result4';



function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={Logo} alt={"logo"} />
        <button className="openMenu"><img src={openMenu} alt='' /></button>
      </header>
      <Menu />
      <Quiz />
      {/* <Result1 /> */}

    </div>
  );
}

export default App;

