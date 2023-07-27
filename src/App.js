import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='home'>
        <Home />
      </div>
    </div>
  );
}

export default App;
