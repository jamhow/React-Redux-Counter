const initialState = {
  count: 0,
  totalCount: 0,
  newNumber: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        totalCount: state.totalCount + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        totalCount: state.totalCount + 1
      };
    case 'REPLACE':
      return {
        ...state,
        newNumber: action.count
      };
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: parseInt(state.newNumber),
        totalCount: 0
      };
    default:
      return state;
  }
}
export default counterReducer;