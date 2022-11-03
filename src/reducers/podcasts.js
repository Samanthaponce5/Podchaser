import { FETCH_PODCASTS } from '../actions/types'
const podcasts = (state = [], action) => {
    switch (action.type) {
      case FETCH_PODCASTS:
        return action.payload;

      default:
        return state;
    }
  };
  
  export default podcasts