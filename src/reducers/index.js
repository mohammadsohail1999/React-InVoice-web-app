import {combineReducers} from 'redux';

const InVoiceReducer = (state=[],action)=>{

    switch(action.type){

        case 'FETCH':
            return [...action.payload]
    
        case 'CREATE':
            return [...state, action.payload]
         
         case 'EDIT':
             return state.map(crr => crr.id === action.payload.id ? action.payload : crr) 
            
        case 'DELETE':
        
        return state.filter(crr => crr.id !== action.payload)
        

    default :
    return []

    }




}






export const GlobalReducer  = combineReducers({

    Global :InVoiceReducer





})