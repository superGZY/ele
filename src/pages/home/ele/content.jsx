import React, {Component} from 'react' 
import { ContentWrap } from './styledele'

import List from './list'
import Loadmore from 'component/comps/loadmore'
import Eleresfilter from './eleresfilter'

export default class Content extends Component{
    sendfilter = (data)=>{
        this.props.filter(data)
        //console.log(data)
    }
    render(){
        return(
            <ContentWrap>
                <h4>推荐商家</h4>
                <Eleresfilter sendfilter = {(data)=>{this.sendfilter(data)}}></Eleresfilter>
                <ul>
                    {
                        this.props.data.items.map((value, index) => (
                            <List key={index} data={value}></List>
                        ))
                    }
                </ul>
                <Loadmore content={this.props.content}></Loadmore>
            </ContentWrap>
        )
    }
}