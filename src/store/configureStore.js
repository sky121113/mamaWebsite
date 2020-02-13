import createStore from 'redux';
import messageReducer from '../reducers/';

const store = createStore(messageReducer);

// export { store };
export default store;
