import ADD_MESSAGE from '../constants/action-types';

const addMessage = (message:{type:String, payload:{} }) => ({
  type: ADD_MESSAGE, payload: message,
});

// export { addMessage };
export default addMessage;
