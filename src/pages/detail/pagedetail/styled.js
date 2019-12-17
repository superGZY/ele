import styled from 'styled-components'

export const HeaderWrap = styled.div`
    position: relative;
    line-height:1.2;
    .index-2guaN{
        padding-top:2rem;
        color:#333;
        background-color: #fff;
        nav{
            position:absolute;
            top:0;
            left: 0;
            right: 0;
            width:100%;
            height:2rem;
            padding:.08rem .2rem 0 .2rem;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50%;
            &::before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background-image: linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5));
            }
            .index--iRT3{
                margin:.1rem 0 0 .1rem;
                width: .2rem;
                height:.2rem;
                display: inline-block;
                border-bottom: .04rem solid #fff;
                border-left: .04rem solid #fff;
                transform: rotate(45deg);
            }
        }
        .index-ccm5A{
            position: relative;
            padding-top:.6rem;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            img{
                width:1.5rem;
                height:1.5rem;
                border-radius:.06rem;
                position: absolute;
                top:0;
                left:50%;
                margin-left:-0.75rem;
                margin-top:-1.2rem;
            }
            .index-2uv7r{
                width:5.4rem;
                h2{
                    font-size:.41rem;
                    color:#333;
                    width:100%;
                    padding-right:.2rem;
                    white-space: nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    text-align:center;
                    .index-1_VRD{
                        width:.3rem;
                        height:.5rem;
                        position: relative;
                        &::after{
                            content: "";
                            border-style: solid;
                            border-width: .11rem 0 .11rem .13rem;
                            border-color: transparent transparent transparent rgba(0,0,0,.67);
                            position: absolute;
                            left: .12rem;
                            top: .16rem;
                        }
                    }
                }
                .index-24KTi{
                    height:.24rem;
                    margin-top:.13rem;
                    font-size:.22rem;
                    color:#666;
                    text-align:center;
                    span:not(:last-child){
                        padding-right:.2rem;
                    }
                }
            }
            .activities{
                margin:.2rem .75rem 0 .75rem;
                display:flex;
                align-items:center;
                width:6rem;
                .index-2Gi26{
                    overflow:hidden;
                    flex:1;
                    .activity-tags-2y2CC{
                        overflow:hidden;
                        height:.4rem;
                        display:flex;
                        .activity-tags-2bSeL{
                            display: inline-block;
                            margin:.05rem;
                            div{
                                font-size:.2rem;
                                padding:.02rem .08rem;
                            }
                        }
                    }
                }
                .index-jk0Mt{
                    font-size:.22rem;
                    color:#999;
                    padding-right:.22rem;
                    position: relative;
                    text-align: right;
                    flex-shrink: 0;
                    line-height: 1.2;
                    &::after{
                        content: "";
                        display: block;
                        border-style: solid;
                        border-width: .08rem .07rem 0;
                        border-color: #999 transparent transparent;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 0;
                    }
                }
            }
            .index-TmrYy{
                width:6rem;
                margin:.17rem .75rem .2rem .75rem; 
                font-size:.22rem;
                color:#999;
                overflow:hidden;
                white-space: nowrap;
                text-overflow:ellipsis;
            }
        }
    }

`
export const PosterWrap = styled.div`
    .index-2vPo3{
        padding-top:.14rem;
        background: #fff;
        img{
            width:6.86rem;
            height:1.76rem;
            margin: 0 .32rem;
            border-radius:.08rem;
        }
    }
`
export const RecommendWrap = styled.div`
    @font-face {
    font-family: 'iconfont';  /* project id 1561304 */
    src: url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.eot');
    src: url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.woff') format('woff'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.svg#iconfont') format('svg');
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: .48rem;
        font-style: normal;
        color:#2395FF;
    }
    padding-top:.32rem;
    background:#fff;
    .recomd{
        .recommend-1kbzU{
            padding-left:.32rem;
            margin-bottom:.2rem;
            font-size:.32rem;
            color:#333;
            font-weight:700;
        }
        .recommend-38t08{
            overflow-y:scroll;
            display:flex;
            .recommend-1U7u5{
                display:flex;
                .recommend-3EB-z{
                    margin:0 .2rem 0 .32rem;
                    padding-bottom:.32rem;
                    width:2.4rem;
                    flex:none;
                    img{
                        width:2.4rem;
                        height:2.4rem;
                        display:block;
                    }
                    div{
                        .food-card-1ppXR{
                            margin:.14rem 0 .07rem 0;
                            font-size:.28rem;
                            color:#333;
                            white-space: nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis
                        }
                        .food-card-3O1zm{
                            margin-bottom:.14rem;
                            font-size:.2rem;
                            color:#999;
                        }
                        .food-card-2h4ZL{
                            display:flex;
                            align-items:center;
                            justify-content: space-between;
                            .food-card-wVKdM{
                                color: rgb(255, 83, 57);
                                font-size:.36rem;
                                font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
                                small{
                                    font-size:.28rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
export const ShoptabWrap= styled.div`
        position:sticky;
        z-index:2;
        top:0;
        .shop-tab-1MgBk{
            line-height:.81rem;
            background:#fff;
            display:flex;
            .shop-tab-2ipt1{
                flex:1;
                text-align:center;
                font-size:.3rem;
                color:#666;
                p{
                    display:inline-block;
                    position: relative;
                }
            }
            .shop-tab-nD6jp{
                p{
                    color: #333;
                    font-weight: 700;
                    span{
                        background-color: rgb(35, 149, 255);
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: .04rem;
                    }
                }
            }
        }
`
export const MenuWrap = styled.div`
    position: relative;
    z-index:3;
    @font-face {
    font-family: 'iconfont';  /* project id 1561304 */
    src: url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.eot');
    src: url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.woff') format('woff'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.svg#iconfont') format('svg');
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: .48rem;
        font-style: normal;
        color:#2395FF;
    }
    .elips{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .menuview-menuview_2hUkG{
        height:12.53rem;
        .menuview-menuviewMain_17K3g{
            height:100%;
            background:#fff;
            padding-bottom:.96rem;
            main{
                display:flex;
                height:100%;
                .left{
                    overflow-y: auto;
                    height: 100%;
                    background-color: #f8f8f8;
                    padding-bottom:.8rem;
                    width:1.54rem;
                    ul{
                        position: relative;
                        flex: none;
                        li{
                            position: relative;
                            font-size:.24rem;
                            color:#666;
                            padding: .35rem .15rem;
                            img{
                                width:.26rem;
                                height:.26rem;
                                margin-right:.06rem;
                            }
                            span{
                                overflow:hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                            &.active{
                                color:#333;
                                background:#fff;
                            }
                            .menucategory-categoryQuantity_28BIn{
                                position: absolute;
                                right: .06rem;
                                top: .06rem;
                                color: #fff;
                                background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
                                border-radius: .15rem;
                                font-size: .2rem;
                                font-weight: 700;
                                text-align: center;
                                min-width: .28rem;
                                padding: 0 .08rem;
                                line-height: .28rem;
                            }
                        }
                    }
                }
                .right{
                    position: relative;
                    height: 100%;
                    .scroller{
                        height:100%;
                        padding-bottom:.8rem;
                        overflow-y: auto;
                        dl{
                            dt{
                                margin-left:.2rem;
                                padding: .15rem .6rem .15rem 0;
                                font-size:.2rem;
                                color:#999;
                                strong{
                                    font-size:.24rem;
                                    color:#666;
                                    margin-right:.1rem;
                                }
                            }
                            dd{
                                padding-left:.2rem;
                                height:2.37rem;
                                .fooddetails-root_2HoY2{
                                    padding:.2rem 0;
                                    height:100%;
                                    display:flex;
                                    .fooddetails-logo_2Q0S7{
                                        width:1.9rem;
                                        height:1.9rem;
                                        position: relative;
                                        margin-right:.2rem;
                                        flex:none;
                                        img{
                                            width:100%;
                                            border-radius:.04rem;
                                        }
                                    }
                                    .fooddetails-info_1fBtn{
                                        flex:1;
                                        position: relative;
                                        padding-right:.3rem;
                                        padding-bottom:.5rem;
                                        .fooddetails-name_P4hpW{
                                            padding-right:.3rem;
                                            display:flex;
                                            align-items: start;
                                            position: relative;
                                            span{
                                                font-weight: 700;
                                                width: 3rem;
                                                font-size: .3rem;
                                                color:#333;
                                            }
                                        }
                                        .fooddetails-desc_3tvBJ{
                                            margin:.1rem 0;
                                            font-size:.2rem;
                                            color:#999;
                                            width:3.2rem;
                                        }
                                        .fooddetails-sales_1ETVq{
                                            margin:.13rem 0;
                                            font-size:.2rem;
                                            color:#999;
                                            line-height:1;
                                            >span:not(:first-child){
                                                margin-left:.08rem;
                                            }
                                        }
                                        .fooddetails-activityRow_1FKti{
                                            display:flex;
                                            .foodcommon-activity_2wCAV{
                                                display:flex;
                                            }
                                        }
                                        .salesInfo-price_3_oc1_0{
                                            &::before{
                                                content: "￥";
                                                font-size: .24rem;
                                                display: inline-block;
                                            }
                                            position: absolute;
                                            bottom: 0;
                                            font-size: .3rem;
                                            line-height: .34rem;
                                            color: #ff5339;
                                            padding-bottom: .07rem;
                                            display: flex;
                                            align-items: baseline;
                                        }
                                        .buttonbox{
                                            display:flex;
                                            align-items: center;
                                            position: absolute;
                                            bottom:0;
                                            right:.2rem;
                                            .fooddetails-button_RwKqC{
                                                width:.44rem;
                                                height:.44rem;
                                                text-align:center;
                                                i{
                                                    line-height:1;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        }
    }
`
export const BuycarWrap = styled.div`
    @font-face {
    font-family: 'iconfont';  /* project id 1561304 */
    src: url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.eot');
    src: url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.woff') format('woff'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1561304_gqth87rf8mk.svg#iconfont') format('svg');
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: .48rem;
        font-style: normal;
        color:#2395FF;
    }
    footer{
        .bottomNav-cartfooter_1Xb8t_0{
            z-index:11;
            position: fixed;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            padding-left:1.58rem;
            background-color: rgba(61,61,63,.9);
            align-items: center;
            height:.96rem;
            .bucar{
                box-sizing: border-box;
                position: absolute;
                width:1rem;
                height:1rem;
                border:.1rem solid #444;
                border-radius: 100%;
                left:.24rem;
                bottom:.15rem;
                box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
                will-change: transform;
                background-image: radial-gradient(circle,#363636 6.266667vw,#444 0);
                display:flex;
                align-items:center;
                justify-content:center;
                i{
                    color:#5F5F63;
                    line-height:1;
                    font-size:.52rem;
                }
                span{
                    position:absolute;
                    color: #fff;
                    background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
                    border-radius: .15rem;
                    font-size: .2rem;
                    font-weight: 700;
                    text-align: center;
                    min-width: .28rem;
                    padding: 0 .08rem;
                    line-height: .28rem;
                    right:-.09rem;
                    top:-.1rem;
                    display:none;
                }
                &.hasbuy{
                    background-color: #3190e8;
                    background-image:none;
                    i{
                        color:#fff;
                    }
                    span{
                        display:block;
                    }
                }
            }
            .count{
                font-size:.25rem;
                color:#999;
                flex:1;
            }
            .total{
                background-color: #535356;
                height:100%;
                width:2.1rem;
                color: #fff;
                text-align: center;
                font-weight: 700;
                font-size:.3rem;
                line-height:.96rem;
                span{
                    display:block;
                }
                .canorder{
                    background-color: #38ca73;
                    color:#fff;
                }
                .addtoorder{
                    font-size:.22rem;
                }
            }
        }
    }
`