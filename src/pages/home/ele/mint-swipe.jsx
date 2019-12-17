import React, {Component} from 'react' 
import { Grid } from 'antd-mobile';
import { Swipe } from './styledele'
import { http } from 'assets/utils/http.js'
import {urlChange} from 'component/script/imgurl'


export default class Mintswipe extends Component{
    constructor(){
        super()
        this.state={
            data:Array.from(new Array(14)).map((_val, i) => ({
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
                text: `name${i}`
            }))
        }
    }
    async componentDidMount(){
        let result = await http({
            url:'/api/restapi/shopping/v2/entries?templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5',
            params:{
                "latitude": 30.330064,
                "longitude": 120.393443,
            },
            method:'GET'
        })
        let resultdata = result[0].entries
        let length = resultdata.length
        
        for(var i=0; i<length; i++){
            resultdata[i].image_hash = urlChange(resultdata[i].image_hash,'?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed')
        }
        this.setState({
            data:resultdata.map((val, i) => ({
                icon: val.image_hash,
                text: val.name,
            }))
        }) 
    }
    render(){
        return(
            <div>
                <Swipe>
                    <Grid 
                        data={this.state.data} 
                        isCarousel = {true}
                        carouselMaxRow={2}
                        hasLine={false} 
                        infinite={true}
                        onClick={_el => console.log(_el)} 
                        columnNum = {5}
                    />
                </Swipe>
            </div>
        )
    }
}

