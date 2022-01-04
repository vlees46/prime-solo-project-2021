const usermealReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USERMEAL':
        return action.payload;
      case 'UNSET_USERMEAL':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default usermealReducer;
  