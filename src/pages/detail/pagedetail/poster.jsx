import React, {Component} from 'react' 
import { PosterWrap} from './styled'
import {urlChange} from 'component/script/imgurl'
export default class Poster extends Component{
    render(){
        if(this.props.data){
            let posterurl = urlChange(this.props.data.image_hash,'?x-oss-process=image/format,webp/resize,w_686')
            return(
                <PosterWrap>
                    <div className="index-2vPo3">
                        <img src={posterurl} alt=""/>
                    </div>
                </PosterWrap>
            )
            return(
                <div></div>
            )
        }
        else{
            return (
                <div></div>
            )
        }
    }
}