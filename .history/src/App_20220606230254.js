//import logo from './logo.svg';
import './App.css';
import Header from './components/header_footer/Header';
import Coins from './components/Coins/Coins'
import TopBar from './components/header_footer/TopBar';

function App() {
  return (
    <div className='App'>
      <TopBar></TopBar>
      <Header></Header>
      <Coins></Coins>
    </div>
  );
}

export default App;
