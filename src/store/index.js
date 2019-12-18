import { createStore, applyMiddleware,compose} from 'redux'
import reducres from './reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import Immutable from 'immutable'

const rootState = Immutable.Map({})
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(
    reducres,
    rootState,
    enhancer
)

sagaMiddleware.run(sagas)

export default store