import React, {Component} from 'react' 
import Header from './header'
import Recommend from './recommend'
import Shoptab from './shoptab'
import PosterWrap from './poster'
import Menu from './menu'
import Buycar from './buycar'
import { http } from 'assets/utils/http'

export default class Detailmain extends Component{
    constructor(){
        super()
        this.state = {
            data:{
                rst:{
                    posters:[],
                    id:''
                },
                recommend:[]
            }
        }
    }
    async componentDidMount(){
        let result = await http({
            url:'/restapi/shopping/restaurants/E5934770853489684350/batch_shop?'
        })
        this.setState({
            data:result.data
        })
    }
    render(){
        // /"E3794693006827851099"
        return(
            <>
              <Header data = {this.state.data.rst}></Header>
              <Shoptab></Shoptab>
              {
                  this.state.data.rst.posters.map((v, i) => (
                    <PosterWrap data={v} key={i}></PosterWrap>
                  ))
              }
              {
                  this.state.data.recommend.map((v, i)=>(
                    <Recommend data={v} key={i} restaurant_id={this.state.data.rst.id}></Recommend>
                  ))
              }
              <Menu data = {this.state.data.menu} restaurant_id={this.state.data.rst.id}></Menu>
              <Buycar data={ this.state.data.rst} restaurant_id={this.state.data.rst.id}></Buycar>
            </>
        )
    }
}