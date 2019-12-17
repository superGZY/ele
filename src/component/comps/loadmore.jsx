import React, {Component} from 'react' 

import { Loadmorewrap } from 'component/comps/styledloadmore'

export default class Loadmore extends Component{
    render(){
        return(
            <Loadmorewrap>
                <span>{this.props.content}</span>
            </Loadmorewrap>
        )
    }
}