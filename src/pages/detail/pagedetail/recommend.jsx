import React, {Component} from 'react' 
import {RecommendWrap} from './styled'
import { connect } from 'react-redux'
const mapState = state => {
    return{
        rest:state.detail.rest
    }
}
const mapDispatch = dispatch => ({
    changecar(type,payload){
        dispatch({
            type,
            data:payload
        })
    }
})
class Recommend extends Component{
    addtoCar = (restaurant_id,category_id, vfood_id,name,price, quantity)=>{
        this.props.changecar('addtoCar',{
            restaurant_id:restaurant_id,
            category_id,
            vfood_id,
            quantity,
            name,
            price
        })
    }
    subtoCar = (restaurant_id,category_id, vfood_id,name,price,quantity) => {
        this.props.changecar('subtoCar',{
            restaurant_id:restaurant_id,
            category_id,
            vfood_id,
            quantity,
            name,
            price
        })
    }
    render(){
        if(this.props.data && this.props.restaurant_id){
            let arr = this.props.data.items
            for(var i=0; i<arr.length; i++){
                if( !/(http|https)/.test(arr[i].image_path)){
                    arr[i].image_path ='https://cube.elemecdn.com/'+ arr[i].image_path.slice(0,1)+'/'+arr[i].image_path.slice(1,3)+'/'+arr[i].image_path.slice(3)+'.'+arr[i].image_path.slice(arr[i].image_path.length-4).replace(/[0-9]|d|b/,'')+'?x-oss-process=image/resize,m_lfit,w_241/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp'
                }
            }
            return(
                <RecommendWrap>
                    <div className="recomd">
                        <p className="recommend-1kbzU">{this.props.data.name}</p>
                        <div className="recommend-38t08">
                            <div className="recommend-1U7u5">
                                {
                                    this.props.data.items.map((v, i) =>(
                                        <div className="recommend-3EB-z" key={i}>
                                            <img src={v.image_path} alt=""/>
                                            <div>
                                                <p className="food-card-1ppXR">{v.name}</p>
                                                <p className="food-card-3O1zm">月销{v.month_sales}好评率{v.satisfy_rate}</p>
                                                <div className="food-card-2h4ZL">
                                                    <p className="food-card-wVKdM"><small>￥</small>{v.lowest_price}</p>
                                                    {
                                                        this.props.rest[v.restaurant_id]?this.props.rest[v.restaurant_id][v.category_id]?this.props.rest[v.restaurant_id][v.category_id][v.vfood_id]?<>
                                                            <span className="cartbutton-entitybutton_9fUdS iconfont" rol="button" onClick={() => {this.subtoCar(this.props.restaurant_id,v.category_id,v.vfood_id,v.name,v.lowest_price, v.min_purchase)}}>&#xe65a;</span>
                                                            <span>{this.props.rest[v.restaurant_id][v.category_id][v.vfood_id].quantity}</span>
                                                        </>:null:null:null
                                                    }
                
                                                    <span className="cartbutton-entitybutton_9fUdS iconfont" rol="button" onClick={() => {this.addtoCar(this.props.restaurant_id,v.category_id,v.vfood_id,v.name,v.lowest_price, v.min_purchase)}}>&#xe659;</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </RecommendWrap>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
export default connect(mapState,mapDispatch)(Recommend)