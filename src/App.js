import './App.scss';
import Dashboard from './Dashboard/Dashboard';
import FormSelector from './Forms/FormSelector';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TimezoneForm from './Forms/TimezoneForm';

function App() {
  return (
    <Router>
      <div className="App d-flex d-flex__center">
        <div className="app-content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/form/select">
              <FormSelector />
            </Route>
            <Route path="/form/timezone">
              <TimezoneForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
