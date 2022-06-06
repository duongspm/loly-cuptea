import logo from './logo.svg';
import './App.css';
import Header from './components/header_footer/Header';
import Coin from './Coins/Coin'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Coin></Coin>
    </div>
  );
}

export default App;
