import {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './pages/Loading/Loading';


const Routes = () => {
  const defaultPath = "/weather-app"
  return (
    <Fragment>
      <Switch>
        <Route exact path={defaultPath} component={Loading} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
