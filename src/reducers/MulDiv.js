const initialState=5

const calculate=(state=initialState,action)=>{
    switch(action.type){
        case "MULTIPICATION":return state * action.payload
        case "DIVISION":return state / 5
        default: return state
    }




}

export default calculate