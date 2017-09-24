import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import viewedUserReducer from './viewed_user_reducer';

// {
//   entites: {
//     products: {
//       byId: {

//       }
//       AllIds: []
//     }
//   }

//   user: {

//   }

//   ui {
//     viewedUser: 19
//     viewedProduc: 61
//   }

//   session: {

//   }
//   errors: {
//     session: []
//     product: []
//   }
// }

const rootReducer = combineReducers({
    entities: entitiesReducer,
    viewedUser: viewedUserReducer,
    ui: uiReducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;