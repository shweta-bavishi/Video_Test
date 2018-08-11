import { SUCCESS,FAILED } from '../Actions/types';
const INITIAL_STATE = { videos: [], error: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCESS:
      return { ...state, videos: action.payload };
    case FAILED:
      return { ...state, error: 'FAiled' };
    default:
      return state;
}
};
