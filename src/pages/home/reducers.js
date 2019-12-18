import { Map, List } from 'immutable'

/* const defaultState = {
    list:{
        first:'',
        second:''
    }
} */
const defaultState = Map({
    list:Map({
        first:'',
        second:''
    })
})
export default (state = defaultState, action) =>{
    console.log(action)
    switch(action.type){
        case 'saveHomeFilter':
            /* return{
                list:action.data
            }  */
            return Map({
                list:Map(action.data) 
            })
        default:
            return state
    }
}