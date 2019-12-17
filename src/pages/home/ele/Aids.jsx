import React, {Component} from 'react' 
import { AidsWrap } from './styledele'

export default class Aids extends Component{
    render(){
        return(
            <AidsWrap>
                <div className="poster1">
                    <h3>品质套餐</h3>
                    <p className="title2">搭配齐全吃得好</p>
                    <p className="title3">立即抢购 &gt;</p>
                    <img alt="加载中" src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed"/>
                </div>
                <div className="poster2">
                    <div className="content">
                        <img alt="加载中" src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34"/>
                        <span className="title">超级会员</span>
                        <span className="dot"></span>
                        <span className="titlenext">每月领20元红包</span>
                    </div>
                    <a href="/">立即开通></a>
                </div>
            </AidsWrap>
        )
    }
}