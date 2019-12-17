import { takeEvery } from 'redux-saga/effects'
import { sagas as home } from 'pages/home/index'
import { sagas as detail } from 'pages/detail/index'


console.log( detail.type)
function* sagas () {
    yield takeEvery(home.type, home.action)
    yield takeEvery(detail.type, detail.action)
}

export default sagas