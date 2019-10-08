// import * as actionTypes from '../../actions';

// const initialState = {
//     counter: 0,
//     results: []
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case action.types.INCREMENT:
//                 return {
//                     ...state,
//                     counter: state.counter +1
//                 }             
//         case action.types.DROP:
//                 return {
//                     ...state,
//                     counter: state.counter -1
//                 }       
//         case action.types.ADD:            
//                 return {
//                     ...state,
//                     counter: state.counter + action.value
//                 }                    
//         case action.types.REMOVE:       
//                 return {
//                     ...state,
//                     counter: state.counter - action.value
//                 }            
//         case action.types.STORE_RESULT:       
//                 return {
//                     ...state,
//                     results: state.results.concat( {id:Date(), value: state.counter} ) 

//                 }            
//         case action.types.DELETE_RESULT:       
//                 return {
//                     ...state,
//                     results: state.results.filter(result => result.id !== action.resultElementId )
//                 }           
        
//     }

//     return state;
// }    
  
// export default reducer;