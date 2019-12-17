const defaultState = {
    rest:{
        
    }
    
}

export default (state = defaultState, action) =>{
    switch(action.type){
        case 'addtoCar':
            let restobj = JSON.parse(JSON.stringify(state.rest))
            //查找店铺id
            let restaurant_id = Object.keys(restobj).find((value) => {
                return value == action.data.restaurant_id
            })
            console.log(restaurant_id)
            //店铺已存在
            if(restaurant_id){
                let category_id = Object.keys(restobj[restaurant_id]).find((value) => {
                    return value == action.data.category_id
                })
                //店铺商品数量、总价计算
                restobj[restaurant_id].restaurant_count += action.data.quantity
                restobj[restaurant_id].restaurant_total += action.data.quantity * action.data.price
                //左边索引已存在
                if(category_id){
                    let vfood_id = Object.keys(restobj[restaurant_id][category_id]).find((value) => {
                        return value == action.data.vfood_id
                    })
                    //商品已存在
                    if(vfood_id){
                        restobj[restaurant_id][category_id][vfood_id].quantity += action.data.quantity
                    }
                    else{
                        //商品不存在
                        restobj[restaurant_id][category_id][action.data.vfood_id] = {
                            restaurant_id: action.data.restaurant_id,
                            category_id: action.data.category_id,
                            vfood_id: action.data.vfood_id,
                            quantity: action.data.quantity,
                            name: action.data.name,
                            price: action.data.price
                        }
                    } 
                    restobj[restaurant_id][category_id].category_id_count +=action.data.quantity
                }
                else{
                    //左边索引不存在
                    restobj[restaurant_id][action.data.category_id] = {
                        [action.data.vfood_id]:{
                            restaurant_id: action.data.restaurant_id,
                            category_id: action.data.category_id,
                            vfood_id: action.data.vfood_id,
                            quantity: action.data.quantity,
                            name: action.data.name,
                            price: action.data.price
                        },
                        category_id_count:action.data.quantity
                    }
                }
            }
            else{
                //店铺不存在
                restobj[action.data.restaurant_id] = {
                    [action.data.category_id]:{
                        [action.data.vfood_id]:{
                            restaurant_id: action.data.restaurant_id,
                            category_id: action.data.category_id,
                            vfood_id: action.data.vfood_id,
                            quantity:action.data.quantity,
                            name: action.data.name,
                            price: action.data.price
                        },
                        category_id_count:action.data.quantity
                    },
                    restaurant_count:action.data.quantity,
                    restaurant_total:action.data.quantity * action.data.price
                }
            }
            return Object.assign({},state,{rest:restobj})
        case 'subtoCar':
            let restobj2 = JSON.parse(JSON.stringify(state.rest))
            //商品数量减
            restobj2[action.data.restaurant_id][action.data.category_id][action.data.vfood_id].quantity -= action.data.quantity
            if(restobj2[action.data.restaurant_id][action.data.category_id][action.data.vfood_id].quantity === 0){
                delete restobj2[action.data.restaurant_id][action.data.category_id][action.data.vfood_id]
            }
            //左边栏数量减
            restobj2[action.data.restaurant_id][action.data.category_id].category_id_count -= action.data.quantity
            if(restobj2[action.data.restaurant_id][action.data.category_id].category_id_count === 0){
                delete restobj2[action.data.restaurant_id][action.data.category_id]
            }
            //店铺数量、总价减
            restobj2[action.data.restaurant_id].restaurant_count -= action.data.quantity
            restobj2[action.data.restaurant_id].restaurant_total -= action.data.quantity * action.data.price
            if(restobj2[action.data.restaurant_id].restaurant_count === 0){
                delete restobj2[action.data.restaurant_id]
            }
            return Object.assign({},state,{rest:restobj2})
        default:
            return state
    }
}