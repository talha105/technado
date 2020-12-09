import {FETCH_BLOGS} from "../actions/types"


const intialState=[];


export default function(state=intialState,action){
    switch(action.type){
        case FETCH_BLOGS:
            return action.payload
        default:
            return state
    }
}