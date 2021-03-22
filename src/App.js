import logo from './logo.svg';
import './App.scss';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App d-flex d-flex__center">
      <div className="app-content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
