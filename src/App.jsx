import Quiz from './components/Quiz';
import Logo from "./img/logo.png";
import openMenu from './img/icon-menu.png'
import Menu from './components/Menu';



function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={Logo} alt={"logo"} />
        <button className="openMenu"><img src={openMenu} alt='' /></button>
      </header>
      <Menu />
      <Quiz />


    </div>
  );
}

export default App;

