// @flow
import { ADD_MESSAGE } from '../constants/action-types';
import data from '../constants/models';

const messageReducer = (state:any = data, action:any) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      action.payload.id = String(state.message.length + 1);
      return { ...state, message: [...state.message, action.payload] };
    }
    default: {
      return state;
    }
  }
};

// export { messageReducer };
export default messageReducer;
