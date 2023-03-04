import logo from './logo.svg';
import './App.css';
import CreateCards from './components/create-cards'
import Study from './components/study';



function App() {
  const card_info = [];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <CreateCards/>
          <Study/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
