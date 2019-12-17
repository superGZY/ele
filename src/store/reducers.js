import { combineReducers } from 'redux'
import { reducers as list} from 'pages/home/index'
import { reducers as rest} from 'pages/detail/index'

export default combineReducers({
    home:list,
    detail:rest
})