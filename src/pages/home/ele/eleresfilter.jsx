import React, {Component} from 'react' 
import { EleresfilterWrap } from './styledele'
import { http } from 'assets/utils/http'
import { connect } from 'react-redux'


const mapState = state => {
    return{
        list:state.getIn(['home','list'])
    }
}
const mapDispatch = dispatch => ({
    firstFilter(payload){
        dispatch({
            type:'saveHomeFilter',
            data:payload
        })
    }
})
class Eleresfilter extends Component{
    constructor(){
        super()
        this.state = {
            list:['距离最近','品质联盟'],
            index:'',
            select:false,
            inside_sort_filter:[],
            show: false,
            liindex:''
        }
    }
    handleClick = (i)=>{
        if(this.state.index === i){
            this.setState({
                index:''
            })
            this.props.firstFilter({first:'',second:''})
            console.log(0)
        }
        else{
            this.setState({
                index:i
            })
            this.props.firstFilter({first:'',second:this.state.list[i-1]})
            console.log(this.state.list[i-1])
        }
    }
    clicktotop = () =>{
        this.setState({
            index:0
        })
        let el = document.getElementsByClassName('scrollparent')[0]
        let scrollparent = document.getElementsByClassName('scrollparent')[0]
        let mask = document.getElementsByClassName('mask')[0]
        let firstfilter = document.getElementsByClassName('firstfilter')[0]
        if(el.scrollTop<420){
            el.scrollTop = 420
        }
        scrollparent.style.overflow = 'hidden'
        mask.style.display = "block"
        firstfilter.className="firstfilter show"
        this.setState({
            show:true
        })
    }
    async componentDidMount(){
        this.props.firstFilter({first:''})
        let result =await http({
            url:'/api/pizza/shopping/restaurants/batch_filter?latitude=34.810942&longitude=113.50927&terminal=h5'
        })
        this.setState({
            inside_sort_filter:result.outside.inside_sort_filter
        })
    }
    firstChoose = (i) => {
        this.setState({
            show:false,
            index:0
        })
        let scrollparent = document.getElementsByClassName('scrollparent')[0]
        let mask = document.getElementsByClassName('mask')[0]
        mask = document.getElementsByClassName('mask')[0]
        mask.style.display = "none"
        scrollparent.style.overflow = 'scroll'
        this.props.firstFilter({first:this.state.inside_sort_filter[i].name,second:''})
        // this.props.sendfilter(this.state.inside_sort_filter[i].name)
    }
    render(){
        return(
            <EleresfilterWrap>
                <div className="filterName" >
                    <div onClick={this.clicktotop} className={this.state.index===0?'active':''}>
                        <span >{this.props.list.get('first')  || '综合排序'}</span>
                    </div>
                    {
                        this.state.list.map((v, i) => (
                            <div onClick = { ()=>{
                                this.handleClick(i+1)
                            } } key={i} className={this.state.index===i+1?'active':''} >
                                <span >{v}</span>
                            </div>
                        ))
                    }
                    <div >
                        <span >筛选</span>
                    </div>
                </div>
                <section className={this.state.show?'firstfilter show':'firstfilter'}>
                    <ul>
                        {
                            this.state.inside_sort_filter.map((v, i) => (
                                <li key={i} onClick={()=>{this.firstChoose(i)}} className={v.name === this.props.list.first ?'liactive':''}>
                                    {v.name}
                                    <img alt={v.name} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="/>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </EleresfilterWrap>
        )
    }
}

export default connect(mapState,mapDispatch)(Eleresfilter)