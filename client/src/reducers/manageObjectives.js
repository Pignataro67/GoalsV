export default function objectivesReducer(state = {
  loading: false,
  objectivesData: []}, 
  action){
  switch(action.type){
    case 'LOADING_OBJECTIVES':
      console.log("loading goals now")
      return {...state, loading: true}
    case 'CREATE_OBJECTIVE':
      console.log('cREATE Objectives', action.payload )
      return {...state, objectivesData:[...state.objectivesData, action.payload]}
    default:
      console.log("hit default case in objective reducer")
      return state;
  }
}