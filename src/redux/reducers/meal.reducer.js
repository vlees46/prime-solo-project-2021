const mealReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_REVIEW':
        return action.payload;
      case 'UNSET_REVIEW':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default mealReducer;
  