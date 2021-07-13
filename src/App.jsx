import { useState } from 'react'

import Logo from "./img/logo.png";
import openMenu from './img/icon-menu.png'
import Menu from './components/Menu';
import Quiz from './components/Quiz';
// import Result1 from './components/results/Result1';
// import Result2 from './components/results/Result2';
// import Result3 from './components/results/Result3';
// import Result4 from './components/results/Result4';
// import MoreTime from './components/restComponents/MoreTime';
// import Decline from './components/restComponents/Decline';



function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      {showModal && (
        <Menu
          onCloseButtonClick={() => {
            setShowModal(false);
          }}
        />
      )}
      <header className="App-header">
        <img className="App-logo" src={Logo} alt={"logo"} />
        <button
          onClick={() => { setShowModal(true); }}
          className="openMenu">
          <img src={openMenu} alt='' /></button>
      </header>
      <Quiz />
      {/* <Result1 /> */}
      {/* <MoreTime /> */}
      {/* <Decline /> */}
    </div>
  );
}

export default App;

