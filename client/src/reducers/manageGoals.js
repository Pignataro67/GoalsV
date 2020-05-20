export default function goalsReducer(state = {
  loading: false,
  goals: [] 
  }, action) {
    switch(action.type) {
      case 'CREATE_GOAL':
        console.log('creating', action.payload)
        return {...state, goalsData:[...state.goalsData, action.payload]}
      case 'LOADING_GOALS':
        console.log("loading goals now")
        return {...state, loading: true}
      case 'FETCH_GOALS':
        console.log("fetch goals")
        return {loading: false, goals: action.payload}
      case 'DELETE_GOAL':
        console.log("In REDUCER: deleting", action.payload)
        return state;
      default:
        console.log("hit default case in reducer")
        return state;
    }
  }