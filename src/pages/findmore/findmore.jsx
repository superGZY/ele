import React, {Component} from 'react' 
import { http } from 'assets/utils/http'
import { FindmoreWrap } from './styled'
export default class Findmore extends Component{
    constructor(){
        super()
        this.state = {
            data:[],
            count:''
        }
    }
    async componentDidMount(){
        let result = await http({
            url:'/restapi/chw/visual-editor/items/list'
        })
        this.setState({
            data:result.data.data.list,
            count:result.data.data.count
        }, ()=>{
            console.log(this.state)
        })
    }
    render(){
        return(
            <FindmoreWrap>
                <div className="db-credits">
                    <div className="left">
                        <div className="db-credits-item_wrapper">
                            <div className="db-credits-icon"></div>
                            <p><span>{this.state.count}</span><span>金币</span></p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="db-credits-item_wrapper">
                            <div className="db-credits-icon"></div>
                            <p><span></span><span>兑换记录</span></p>
                        </div>
                    </div>
                </div>
                <div className="db-goods">
                    <ul>
                        {
                            this.state.data.map( v => (
                                <li key={v.id}>
                                    <a href={v.url}>
                                        <div className="db-goods-item_image">
                                            <img src={v.image}/>
                                        </div>
                                    </a>
                                    <div className="db-goods-item_detail-wrapper">
                                        <div className="db-goods-item_title-container">
                                            <div className="db-goods-item_tag" style={{backgroundColor:v.tagText.split(",")[1]}}>{v.tagText.split(",")[0]}</div>
                                            {v.title}
                                        </div>
                                        <div className="db-goods-item_exchange-detail">
                                            <div>
                                                <p className="db-goods-item-price">
                                                    <span style={{color: 'rgb(253, 87, 70)'}}>{v.titleDownTxt}</span>
                                                </p>
                                            </div>
                                            <div className="goods-flex-right">
                                                <div>兑换</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </FindmoreWrap>
        )
    }
}