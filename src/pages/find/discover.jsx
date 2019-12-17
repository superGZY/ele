import React, {Component} from 'react' 
import { http } from 'assets/utils/http'
import { urlChange } from 'component/script/imgurl'
import { DiscoverWrap } from './styledfind'
import { withRouter } from 'react-router-dom'
class Discover extends Component{
    constructor(){
        super()
        this.state = ({
            data:{
                1:[]
            },
            data2:[]
        })
    }
    gofindmore = () => {
        this.props.history.push('/findmore')
    }
    async componentDidMount(){
        let result = await http({
            url:'/restapi/member/v1/discover?'
        })
        let result2 = await http({
            url:'/restapi/member/gifts/suggest'
        })
        result.data[1].forEach( value => {
            value.main_pic_hash = urlChange(value.main_pic_hash,'?x-oss-process=image/format,webp')
        });
        result2.data.forEach( value => {
            value.image_hash = urlChange(value.image_hash,'?x-oss-process=image/format,webp')
        })
        this.setState({
            data:result.data,
            data2:result2.data
        },()=>{
            console.log(this.state)
        })
    }
    render(){
        return(
            <DiscoverWrap>
                <section className="unmerge">
                    <div className="entry list3">
                        {
                            this.state.data[1].map( v => (
                                <a key={v.id}>
                                    <div className="content-wrapper">
                                        <p className="title" style={{color:v.title_color}}>{v.title}</p>
                                        <p className="tips">{v.subtitle}</p>
                                    </div>
                                    <img alt="" src={v.main_pic_hash}/>
                                </a>
                            ))
                        }
                    </div>
                </section>
                <section>
                    <div className="activity-header">
                        <span className="line left"></span>
                        <svg viewBox="-4 3 30 30" id="alarm"><g id="alarm_页面"><g id="alarm_发现页_新增天天特价_确认" transform="translate(-31 -1587)"><g id="alarm_商品" transform="translate(-2 1556)"><g id="alarm_Page-1"><path d="M10 29.9c-7.2 0-13-5.8-13-13 0-2 .4-3.9 1.3-5.7C.5 6.7 5 3.9 10 3.9c7.2 0 13 5.8 13 13s-5.8 13-13 13zM.1 12.1C-.7 13.6-1 15.2-1 16.9c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11c-4.3 0-8.1 2.3-9.9 6.2z"transform="translate(34 32)"></path><path d="M-1 12.1c-1.8-.9-3-2.7-3-4.8C-4 4.4-1.6 2 1.3 2c2 0 3.8 1.1 4.7 2.8l-1.8 1C3.7 4.7 2.5 4 1.3 4-.5 4-2 5.5-2 7.3c0 1.3.7 2.4 1.8 3l-.8 1.8zM21 11.8l-1-1.7c1-.6 1.6-1.7 1.6-2.8 0-1.8-1.5-3.3-3.3-3.3-1.3 0-2.5.8-3.1 2l-1.8-.8c.8-2 2.8-3.3 4.9-3.3 2.9 0 5.3 2.4 5.3 5.3-.1 2-1 3.7-2.6 4.6zM14.3 20.2h-4.2c-.6 0-1-.4-1-1v-8.1c0-.6.4-1 1-1s1 .4 1 1v7.1h3.2c.6 0 1 .4 1 1s-.4 1-1 1zM-1.2 32c-.2 0-.5-.1-.7-.3-.4-.4-.4-1-.1-1.4l4-4.5c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4 4.5c-.2.3-.4.4-.7.4zM21.5 32c-.3 0-.5-.1-.7-.3l-4-4.5c-.4-.4-.3-1 .1-1.4.4-.4 1-.3 1.4.1l4 4.5c.4.4.3 1-.1 1.4-.2.1-.4.2-.7.2z" transform="translate(34 32)"></path></g></g></g></g></svg>
                        限时好礼
                        <span className="line right"></span>
                    </div>
                    <p className="activity-sub-title">金币换豪礼</p>
                    <div className="activity-body">
                        {
                            this.state.data2.map( (v, i) => (
                                i<3?<a key={i}> 
                                    <img src={v.image_hash}/>
                                    <div >
                                        <p className="food-name ui-ellipsis">{v.title}</p>
                                        <div className="food-info">
                                            <span className="price ui-ellipsis">{v.points_required}金币</span>
                                            <del>￥{v.original_price}</del>
                                        </div>
                                    </div>
                                </a>:null
                                
                            ))
                        }
                    </div>
                    <p className="activity-more" onClick={this.gofindmore}>
                        查看更多&nbsp;&nbsp;&gt;
                    </p>
                </section>
            </DiscoverWrap>
        )
    }
}
export default withRouter(Discover)