const updateReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_UPDATE':
        return action.payload;
      case 'UNSET_UPDATE':
        return {};
      default:
        return state;
    }
  };

  
  
  // user will be on the redux state at:
  // state.user
  export default updateReducer;
  