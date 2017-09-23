import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

// {
//   entites: {
//     products: {
//       byId: {

//       }
//       AllIds: []
//     }
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
    ui: uiReducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;