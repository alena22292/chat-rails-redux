import { SET_MESSAGES, CREATE_MESSAGE, CHANNEL_SELECTED } from '../actions';

export default function messagesReducer(state = null, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    case CREATE_MESSAGE:
      if (state.map(message => message.id).includes(action.payload.id)) {
        return state;
      } else {
        const updateState = state.slice(0);
        updateState.push(action.payload);
        return updateState;
      }
    case CHANNEL_SELECTED:
      return [];
    default:
      return state;
  }
}
