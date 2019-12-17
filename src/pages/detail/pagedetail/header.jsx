import React, {Component} from 'react' 
import { HeaderWrap } from './styled'
import {urlChange} from 'component/script/imgurl'
import { withRouter } from 'react-router-dom'
class Header extends Component{
    goback = ()=>{
        this.props.history.goBack()
    }
    render(){
        if(this.props.data.activities){
            var bgurl =urlChange(this.props.data.shop_sign.image_hash,'?x-oss-process=image/format,webp/resize,w_750')
            var titleurl  = urlChange(this.props.data.image_path,'?x-oss-process=image/format,webp/resize,w_150')
            return(
                <HeaderWrap>
                     <div className="index-2guaN">
                        <nav className="index-2g0nR" style={{backgroundImage:`url(${bgurl})`}}>
                            <a className="index--iRT3" onClick={this.goback}></a>
                        </nav>
                        <div className="index-ccm5A">
                            <img alt="" src={titleurl}/>
                            <div className="index-2uv7r">
                                <h2>{this.props.data.name}<i className="index-1_VRD"></i></h2>
                                <div className="index-24KTi">
                                    <span>评价{this.props.data.rating}</span>
                                    <span>月售{this.props.data.recent_order_num}单</span>
                                    <span>蜂鸟快送约{this.props.data.order_lead_time}分钟</span>
                                </div>
                            </div>
                            <div className="activities">
                                <div className="index-2Gi26">
                                    <div className="activity-tags-2y2CC">
                                        {
                                            this.props.data.activity_tags.map((v, i) => i<4? (
                                                <div className='activity-tags-2bSeL' key={i}>
                                                    <div className="activity-tags-3LtvS" style={{color:v.color, border:`1px solid ${v.border}`}}>
                                                        {v.text}
                                                    </div>
                                                </div>
                                            ):'')
                                        }
                                    </div>
                                </div>
                                <div className="index-jk0Mt">{this.props.data.activities.length}个优惠</div>
                            </div>
                            <p className="index-TmrYy">{this.props.data.promotion_info}</p>
                        </div>
                    </div>
                </HeaderWrap>
            )
        }
        else{
            return(
                <div></div>
            )
        }
        
    }
}
export default withRouter(Header)