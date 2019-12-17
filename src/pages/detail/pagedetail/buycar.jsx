import React, {Component} from 'react' 
import { BuycarWrap } from './styled'
import { connect } from 'react-redux'
const mapState = state => {
    return{
        rest:state.detail.rest
    }
}
class Buycar extends Component{
    render(){
        if(this.props.data.name && this.props.restaurant_id){
            return(
                <BuycarWrap>
                    <footer>
                        <div className="bottomNav-cartfooter_1Xb8t_0">
                            <span className={this.props.rest[this.props.restaurant_id]?'bucar hasbuy':'bucar'}>
                                <i className="iconfont">&#xe674;</i>
                                <span>{this.props.rest?(this.props.rest[this.props.restaurant_id]?this.props.rest[this.props.restaurant_id].restaurant_count:0):0}</span>
                            </span>
                            <div className="count">
                                <p className="bottomNav-carttotal_1DJt5_0">
                                    <span>{this.props.rest?(this.props.rest[this.props.restaurant_id]?this.props.rest[this.props.restaurant_id].restaurant_total:'未选购商品'):'未选购商品'} </span>
                                </p>
                                {
                                    this.props.data.float_delivery_fee?<p className="bottomNav-cartdelivery_1TjrT_0">另需配送费{this.props.data.float_delivery_fee}元</p>:null
                                }
                            </div>
                            <div className="total">
                                {
                                    this.props.rest[this.props.restaurant_id]?(this.props.data.float_minimum_order_amount-this.props.rest[this.props.restaurant_id].restaurant_total>0 ? <span className="addtoorder">还差￥{this.props.data.float_minimum_order_amount-this.props.rest[this.props.restaurant_id].restaurant_total}起送</span>:<span className="canorder">去结算</span>):<span>￥{this.props.data.float_minimum_order_amount}起送</span>
                                }
                            </div>
                        </div>
                    </footer>
                </BuycarWrap>
            )
        }
        else{
            return(
                <div></div>
            )
        }
        
    }
}
export default connect(mapState)(Buycar)