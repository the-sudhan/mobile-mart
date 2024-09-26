export const initialState={
    myFav:[],
    myCart:[],
    myData:[]
}

export const reducer=(state,action)=>{
    if(action.type==="name"){
        return{...state,myName:action.payload}
    }
    else if(action.type==="fav"){
        return{...state,myFav:action.payload}
    }
    else if(action.type==="cart"){
        return{...state,myCart:action.payload}
    }
    else if(action.type==="decAmount"){
        return{...state,myCart:state.myCart.map(i=>i.id===action.payload?{...i,count:i.count-1}:i)}
    }
    else if(action.type==="incAmount"){
        return{...state,myCart:state.myCart.map(i=>i.id===action.payload?{...i,count:i.count+1}:i)}
    }
    else if(action.type==="info"){
        return{...state,myData:action.payload}
    }

    else{
        return state
    }
}