import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='title'>Explore Our Events</div>
      <Home/>
    </div>
  );
}

export default App;
