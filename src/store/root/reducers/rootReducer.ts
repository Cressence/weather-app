import { combineReducers } from 'redux';

//Import reducers
import weatherInfo from "./weatherInfo.reducer";

const rootReducer = combineReducers({
    weatherInfo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>