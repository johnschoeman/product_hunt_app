import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

// {
// entites: {
//   products: {
//     byId: {

//     }
//     allIds: []
//   }

//   viewedUser: {

//   }

//   comments: {
//     byId: {
//         1: {
//             id: 1,
//             body: 'parent text',
//             childComments: [
//                 {id: 2, body: 'child text'},
//                 {id: 3, body: 'child text'}
//             ]
//         },
//         4: {
//             id: 4,
//             body: 'parent text',
//             childComments: [
//                 {id: 5, body: 'child text'}
//             ]
//         }
//     }
//     allIds: [1,4]
//   }
// }

//   ui {
//     viewedUser: 19
//     viewedProduct: 61
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