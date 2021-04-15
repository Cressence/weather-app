import { Route, Switch, HashRouter } from 'react-router-dom';
import WeatherInfo from './pages/WeatherInfo';
import Loading from './pages/Loading';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
          <Route exact path='/' component={Loading} />
          <Route path='/info' component={WeatherInfo} />
        </Switch>
    </HashRouter>
  );
};

export default Routes;
