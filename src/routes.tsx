import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import WeatherInfo from './pages/WeatherInfo';
import Loading from './pages/Loading';

const Routes = () => {
  const defaultPath = "/weather-app"
  return (
      <Router>
        <Switch>
          <Route exact path={defaultPath} component={Loading} />
          <Route exact path={`${defaultPath}/info`} component={WeatherInfo} />
        </Switch>
      </Router>
  );
};

export default Routes;
