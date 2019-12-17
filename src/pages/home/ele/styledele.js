import styled from 'styled-components'

export const HeaderWrap = styled.div`
    width:100%;
    overflow: hidden;
    padding: 2.666667vw 3.733333vw 0;
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    .box{
        width:60%;
        display:flex;
        align-items:center;
        justify-content:center;
        height:.69rem;
        font-weight:700;
        color:#fff;
        font-size:.34rem;
    }
`
export const Header2Wrap = styled.div`
    width:100%;
    overflow: hidden;
    padding: 2.666667vw 3.733333vw 0;
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    margin:-.133333vw 0;
    position: sticky;
    z-index:999;
    top:0;
    .content{
        display:flex;
        align-items:center;
        justify-content: center;
        width:100%;
        height:.72rem;
        background:#fff;
        margin: 2vw 0;
        svg{
            display: inline-block;
            width: .32rem;
            height: .32rem;
            margin-right: .1rem;
        }
        span{
            font-family: simsun;
            font-size:.28rem;
            color:#999;
        }
    }
`
export const Swipe = styled.div`
    background:#fff;
    .am-flexbox-item.am-grid-item{
        margin-top:.22rem;
        height:1.28rem;
    }
    .am-grid-item-content{
        padding:0!important;
    }
    .am-grid.am-grid-square .am-grid-item .am-grid-item-inner-content .am-grid-icon{
        margin-top: 0;
        width: .9rem!important;
    }
    .am-grid .am-flexbox .am-flexbox-item .am-grid-item-content .am-grid-item-inner-content .am-grid-text{
        margin-top: .1rem;
        font-size: .24rem;
        color: #666;
        text-align: center;
    }
    ul.slider-list{
        height:3.54rem!important;
    }
    .am-carousel-wrap-dot.am-carousel-wrap-dot-active,.am-carousel-wrap-dot{
        span{
            display:block;
            width:.18rem;
            height:.03rem;
        }
    }
    .am-grid .am-carousel .am-carousel-wrap-dot-active > span{
        background: #fe7100;
    }
`
export const AidsWrap = styled.div`
    width:100%;
    height:3.06rem;
    padding:0 .2rem;
    background:#fff;
    .poster1{
        width:100%;
        height:2.2rem;
        padding:.24rem 0 0 .3rem;
        background:#F7F7F7;
        position: relative;
        h3{
            font-size:.34rem;
            margin-bottom:.1rem;
            color:#333;
            font-weight:700;
        }
        .title2{
            font-size:.26rem;
            color:#777;
            margin-bottom:.18rem;
        }
        .title3{
            color: #af8260;
            font-size:.24rem;
            font-weight:700;
        }
        img{
            position: absolute;
            width:2.82rem;
            top:.24rem;
            right:.37rem;
        }
    }
    .poster2{
        display:flex;
        align-items:center;
        width:100%;
        height:.8rem;
        padding:0 .2rem 0 .3rem;
        margin-top:.08rem;
        background-image: -webkit-gradient(linear,left top,right top,from(#ffefc4),to(#f3dda0));
        background-image: -webkit-linear-gradient(left,#ffefc4,#f3dda0);
        background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
        .content{
            color:#664F1B;
            display:flex;
            align-items:center;
            flex:1;
            img{
                width:.34rem;
                height:.34rem;
            }
            .title{
                font-size:.28rem;
                font-weight:700;
            }
            .dot{
                margin: 0 .106667rem;
                margin: 0 1.066667vw;
                font-weight: 700;
                display:block;
                width:.04rem;
                height:.04rem;
                border-radius:50%;
                background:#664F1B;
            }
            .titlenext{
                font-size:.22rem;
            }
        }
        a{
            font-size:.22rem;
            color:#664F1B;
        }
    }
`
export const ContentWrap = styled.div`
    background:#fff;
    padding-top:.16rem;
    h4{
        display: flex;
        font-size:.3rem;
        color:#000;
        font-weight:400;
        height:.72rem;
        align-items:center;
        justify-content:center;
        &::before,&::after{
            display: block;
            content: "";
            width: .533333rem;
            width: 5.333333vw;
            height: .026667rem;
            height: .266667vw;
            background-color: #999;
            margin-right: 3.466667vw;
            margin-left: 3.466667vw;
        }
    }
`
export const Listwrap = styled.li`
    width:100%;
    padding:.3rem 0;
    font-size:.22rem;
    color:#666;
    border-bottom: .133333vw solid #eee;
    .columnline{
        &::before{
            margin: 0 .08rem;
            color: #ddd;
            content: "|";
        }
    }
    .index-shopInfo_1RRTZ0d{
        padding:0 .2rem;
        display:flex;
        .logo-main_21aInWJ_0{
            position: relative;
            width:1.3rem;
            height:1.3rem;
            img{
                width:100%;
                height:100%;
            }
            .logo-categoryQuantity_uaoPHzl_0{
                background-image:linear-gradient(-90deg, rgb(255, 116, 22), rgb(255, 60, 21) 98%);
                border-radius:.15rem;
                box-sizing:border-box;
                color:rgb(255, 255, 255);
                display:block;
                font-family:"Helvetica Neue", Tahoma, Arial, PingFangSC-Regular, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
                font-size:.2rem;
                font-weight:700;
                height:.28rem;
                line-height:.28rem;
                min-width:.28rem;
                padding-left:.08rem;
                padding-right:.08rem;
                position:absolute;
                right:-.14rem;
                text-align:center;
                top:-.14rem;
                width:.28rem;
            }
        }
        
        .index-main_N3FfcSz{
            display:flex;
            flex:1;
            flex-direction:column;
            justify-content:space-between;
            padding-left:.2rem;
            h3{
                font-size:.3rem;
                color:#333;
                line-height:1.5;
            }
        }
        .index-line_2-iYR1A{
            display:flex;
            justify-content: space-between;
            .starfix{
                margin-right:.08rem;
                position: relative;
                overflow: hidden;
                display: inline-block;
                vertical-align: middle;
                img{
                    width:1.12rem;
                    height:.2rem;
                }
                .star{
                    position: absolute;
                    top: 0;
                    left: 0;
                    overflow: hidden;
                }
                .starbg,.star{
                    display:flex;
                }
            }
            .score{
                margin-right:.08rem;
            }
        }
    }
    .index-activityWrap_3mo1GyG{
        padding-left:1.7rem;
        width: 100%;
        .index-tagLine_1rJw_lq{
            margin: .2rem .2rem 0 0;
            display:flex;
            align-items: center;
            height:.34rem;
            span{
                display:inline-block;
                color: #666;
                line-height:1;
                font-size:.4rem;
            }
            .spanWrap{
                padding: .02rem .08rem;
                margin-right: .1rem;
                margin-bottom: .08rem;
                margin-top: .1rem;
                color: transparent;
                position: relative;
                white-space: nowrap;
                font-size:.12rem;
            }
            .spancon{
                display: flex;
                align-items:center;
                justify-content:center;
                position: absolute;
                left: 0;
                top: 0;
                right: -100%;
                bottom: -100%;
                transform: scale(.5);
                box-sizing:content-box;
                transform-origin: 0 0;
                font-size: .4rem;
                border: 1px solid #666;
                padding: 0 .16rem;
            }
        }
    }
    .line{
        img{
            width:100%;
            height:.133333vw
        }
    }
    .index-activities_25AUDsx{
        display:flex;
        justify-content:space-between;
        .index-activityList_1wvwwUY{
            flex:1;
            overflow: hidden;
            padding-right:.2rem;
            .index-actRow_2f_uNNA{
                display:flex;
                margin-top:.05rem;
                height:.36rem;
                .tags{
                    display:block;
                    padding:.01rem .02rem;
                    border-radius:.05rem;
                    margin-right:.12rem;
                }
                .tagcon{
                    flex:1;
                    font-size:.22rem;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
    .index-activityBtn_tMk-e1C{
        padding:.06rem .2rem 0 0;
        img{
            width:.13rem;
            margin-left:.08rem;
            transition: all .3s ease-in-out;
        }
    }
    .trans{
        transform: rotate(180deg);
    }
`
export const EleresfilterWrap = styled.div`
    position: sticky;
    top:1.22rem;
    background:#fff;
    z-index:999;
    .filterName{
        width:100%;
        height:.79rem;
        display:flex;
        align-items:center;
        justify-content:center;
        div{
            display:flex;
            flex:1;
            align-items:center;
            justify-content:center;
            color:#666;
            font-size:.28rem;
            height:100%;
            &.active{
                font-weight:700;
                color:#000;
            }
        }
    }   
    .firstfilter{
        padding: .16rem 0 .24rem 0;
        border-top:1px solid #ddd;
        display:none;
        &.show{
            display:block;
        }
        ul{
            li{
                padding-left:.4rem;
                height:.8rem;
                font-size:.28rem;
                color:#333;
                line-height:.8rem;
                position: relative;
                &.liactive{
                    color: #3190e8;
                    font-weight: 700;
                    img{
                        display:block;
                    }
                }
                img{
                    position: absolute;
                    right: 3.733333vw;
                    width:.3rem;
                    height:.3rem;
                    top:50%;
                    display: none;
                    transform: translateY(-50%);
                }
            }
        }
    }
   
`