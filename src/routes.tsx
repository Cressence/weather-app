import {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import WeatherInfo from './pages/WeatherInfo';
import Loading from './pages/Loading';

const Routes = () => {
  const defaultPath = "/weather-app"
  return (
    <Fragment>
      <Switch>
        <Route exact path={defaultPath} component={Loading} />
        <Route exact path={`${defaultPath}/info`} component={WeatherInfo} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
