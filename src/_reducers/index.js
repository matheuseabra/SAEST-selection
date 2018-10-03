import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

//Importa reducers e cria reducer raíz

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

//Exporta o reducer raíz
export default rootReducer;