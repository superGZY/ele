const defaultState = {
    list:{
        first:'',
        second:''
    }
}

export default (state = defaultState, action) =>{
    switch(action.type){
        case 'saveHomeFilter':
            return{
                list:action.data
            }
        default:
            return state
    }
}