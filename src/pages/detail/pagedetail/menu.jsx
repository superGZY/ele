import React, {Component} from 'react' 
import { MenuWrap} from './styled'
import {urlChange} from 'component/script/imgurl'
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
class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            ativeleftli:0,
            count:0,
            total:0
        }
        this.myref = React.createRef()
    }
    clickli = (index)=>{
        this.setState({
            ativeleftli:index
        })
        let menusdls = document.getElementsByClassName('menusdl')
        let top=0
        for(var i=0; i<index; i++){
            top += menusdls[i].offsetHeight
        }
        this.myref.current.scrollTop = top
    }
    onscroll = () => {
        //console.log(this.myref.current.scrollTop)
    }
    addtoCar = (restaurant_id,category_id, vfood_id,name,price,quantity) => {
        console.log(category_id)
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
            this.props.data.forEach(v => {
                v.icon_url = urlChange(v.icon_url, '?x-oss-process=image/format,webp/resize,w_26')
                v.foods.forEach( value => {
                    value.image_path = urlChange(value.image_path,'?x-oss-process=image/resize,m_lfit,w_141,h_141/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp')
                })
            })
            return(
                <MenuWrap>
                    <div className="menuview-menuview_2hUkG">
                        <div className="menuview-menuviewMain_17K3g">
                            <main className="menuview-main_i6fQ3">
                                <div className="left">
                                    <ul>
                                        {
                                            this.props.data.map((value, index) => (
                                                <li key={value.id} className={index===this.state.ativeleftli?'active':''} onClick={()=>{this.clickli(index)}}>
                                                    <span className="menucategory-categoryQuantity_28BIn">{this.props.rest[this.props.restaurant_id]?(this.props.rest[this.props.restaurant_id][value.id]?this.props.rest[this.props.restaurant_id][value.id].category_id_count:null):null}</span>
                                                    <img src={value.icon_url} alt=""/>
                                                    <span>{value.name}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <section className="right">
                                    <div className="scroller" ref={this.myref} onScroll={this.onscroll}>
                                        {
                                            this.props.data.map((value, index) => {
                                                return (
                                                    <dl rol="menu" key={index} className="menusdl">
                                                        <dt><strong>{value.name}</strong>{value.description}</dt>
                                                        {
                                                            value.foods.map((v, i) => {
                                                                return (
                                                                    <dd key={v.item_id}>
                                                                        <div className="fooddetails-root_2HoY2">
                                                                            <span className="fooddetails-logo_2Q0S7">
                                                                                <img alt="" src={v.image_path}/>
                                                                            </span>
                                                                            <section className="fooddetails-info_1fBtn">
                                                                                <p className="fooddetails-name_P4hpW">
                                                                                    <span className="elips">{v.name}</span>
                                                                                </p>
                                                                                <p className="fooddetails-desc_3tvBJ elips">{v.description}</p>
                                                                                <p className="fooddetails-sales_1ETVq">
                                                                                    <span>月售{v.month_sales}份</span>
                                                                                    <span>好评率{v.satisfy_rate}%</span>
                                                                                </p>
                                                                               <div className="fooddetails-activityRow_1FKti">
                                                                                    {/* <span className="foodcommon-activity_2wCAV" style={{display:v.activity?'block':'none'}}>
                                                                                        {v.activity.price}
                                                                                        <span className="mini-tag-tag_1I2lF_0">
                                                                                            {(v.activity.price/v.activity.original_price).toFixed(2)}折
                                                                                        </span>
                                                                                    </span> */}
                                                                                </div>
                                                                                <span className="salesInfo-price_3_oc1_0">
                                                                                    <span>{v.lowest_price}</span>
                                                                                </span>
                                                                                <div className="buttonbox">
                                                                                    {
                                                                                        this.props.rest[this.props.restaurant_id]?this.props.rest[this.props.restaurant_id][v.category_id]?(this.props.rest[this.props.restaurant_id][v.category_id][v.vfood_id]?
                                                                                        <>
                                                                                            <div className="fooddetails-button_RwKqC" onClick={() => {this.subtoCar(this.props.restaurant_id,v.category_id, v.vfood_id,v.name,v.lowest_price, v.min_purchase)}}>
                                                                                                <i className="iconfont">&#xe65a;</i>
                                                                                            </div>
                                                                                            <div className="fooddetails-button_RwKqC">
                                                                                                <span>{this.props.rest[this.props.restaurant_id][v.category_id][v.vfood_id].quantity}</span>
                                                                                            </div>
                                                                                        </>
                                                                                    :null):null:null
                                                                                    }
                                                                                    
                                                                                    <div className="fooddetails-button_RwKqC" onClick={() => {this.addtoCar(this.props.restaurant_id,v.category_id, v.vfood_id,v.name,v.lowest_price, v.min_purchase)}}>
                                                                                        <i className="iconfont">&#xe659;</i>
                                                                                    </div>
                                                                                </div>
                                                                            </section>
                                                                        </div>    
                                                                    </dd>
                                                                )
                                                            })
                                                        }
                                                    </dl>
                                                ) 
                                            })
                                        }
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                </MenuWrap>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
export default connect(mapState,mapDispatch)(Menu)