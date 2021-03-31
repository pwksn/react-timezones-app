import './App.scss';
import Dashboard from './Dashboard/Dashboard';
import FormSelector from './Forms/FormSelector';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import TimezoneForm from './Forms/TimezoneForm';
import PersonForm from './Forms/PersonForm';

function App() {

  const {data, isPending, error} = useFetch('https://react-timezones-app-default-rtdb.firebaseio.com/123.json');

  return (
    <Router>
      <div className="App d-flex d-flex__center">
        <div className="app-content">
          <Switch>
            <Route exact path="/">
              {/* {data && <Dashboard data={data}/>} */}
              <Dashboard />
            </Route>
            <Route path="/form/select">
              <FormSelector />
            </Route>
            <Route path="/form/timezone">
              <TimezoneForm />
            </Route>
            <Route path="/form/person">
              {data && <PersonForm timezones={data.timezones}/>}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
