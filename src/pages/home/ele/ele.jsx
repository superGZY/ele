import React,{ createRef} from 'react'
import Header from './header'
import Mintswipe from './mint-swipe'
import Aids from './Aids'
import Content from './content'
import { http } from 'assets/utils/http'

export default class Ele extends React.Component{
    constructor(){
        super()
        this.state = {
            pages:1,
            data:{
                items:[]
            },
            maxlength:32,
            content:'正在努力加载中...'
        }
        this.ref=createRef()
    }
    filter =async (data)=>{
        console.log(data)
    }
    handleScroll = ()=> {
        if(this.ref.current.scrollTop >=this.ref.current.childNodes[0].offsetHeight - this.ref.current.offsetHeight && this.state.data.items.length < this.state.maxlength){
            this.setState({
                pages:this.state.pages+1
            },async ()=>{
                let result = await http({
                    url:`/restapi/shopping/v3/restaurants?_page=${this.state.pages}&_limit=8`
                })
                this.setState({
                    data:{
                        items: [
                            ...this.state.data.items,
                            ...result.data.items
                        ]
                    }  
                })
            })
        }
        else{
            this.setState({
                content:'已经到底啦~~'
            })
        }
    }
    async componentDidMount(){
        let result = await http({
            url:`/restapi/shopping/v3/restaurants?_page=${this.state.pages}&_limit=8`
        })
        this.setState({
            data:{
                items: result.data.items,
                content:'正在努力加载中'
            } 
        })
    }
    handleClick = () => {
        let mask = document.getElementsByClassName('mask')[0]
        let firstfilter = document.getElementsByClassName('firstfilter')[0]
        mask.style.display="none"
        firstfilter.className="firstfilter"
        this.ref.current.style.overflow="scroll"
    }
    render(){
        return(
        <>
            <div className="mask" onClick={this.handleClick} style={{position:'fixed',left:0,right:0,top:0,bottom:0,zIndex:3,background: 'rgba(0,0,0,.5)',display:'none'}}></div>
            <div className="scrollparent" ref={this.ref} style={{height:'100%',overflow:'scroll'}} onScroll={this.handleScroll}>
                <div id="scrollChild">
                    <Header></Header>
                    <Mintswipe></Mintswipe>
                    <Aids></Aids>
                    <Content data={this.state.data} content={this.state.content} filter={(data)=>{ this.filter(data) }}></Content>
                </div>
            </div>
            </>
        )
    }
}
