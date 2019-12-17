import styled from 'styled-components'

export const DiscoverWrap = styled.div`
    .ui-ellipsis{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    section{
        margin-bottom: .21rem;
        background: #fff;
        border-top: 1px solid #eee;
        border-bottom: .013333rem solid #eee;
        border-bottom: .133333vw solid #eee;
    }
    .unmerge{
        border-bottom: none;
        .list3{
            position:relative;
            display:flex;
            flex-wrap:wrap;
            overflow: hidden;
            a{
                width: 50%;
                display:flex;
                justify-content: space-between;
                border-bottom: 1px solid #ededed;
            }
            .title{
                line-height: 1.2;
                font-size: .32rem;
                margin-bottom: .12rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .tips{
                line-height: 1.2;
                font-size: .24rem;
                color: #999;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            a:first-child{
                position: absolute;
                height:3.2rem;
                padding:.44rem .22rem .12rem .32rem;
                img{
                    width:1.5rem;
                    height:1.5rem;
                    align-self: flex-end;
                }
            }
            a:nth-child(2),a:nth-child(3) {
                margin-left: 50%;
                height:1.6rem;
                padding: 0 .3rem;
                align-items:center;
                img{
                    width:.9rem;
                    height:.9rem;
                }
            }
            a:nth-child(3n+1) {
                border-right: 1px solid #ededed;
            }
        }
    }
    .activity-header{
        padding-top:.4rem;
        text-align: center;
        font-size: .36rem;
        font-weight: 700;
        color: #333;
        .line{
            display: inline-block;
            margin: .16rem .07rem .13rem;
            border: .01rem solid #333;
            width: .3rem;
            height: 0;
            position: relative;
            &::after{
                position: absolute;
                top: -.05rem;
                content: "";
                background: #333;
                height: .1rem;
                width: .1rem;
                border-radius: 50%;
            }
        }
        .line.left::after{
            right:-.05rem;
        }
        .line.right::after{
            left:-.05rem;
        }
        svg{
            width:.33rem;
            height:.33rem;
            color:red;
        }
    }
    .activity-sub-title{
        font-size: .22rem;
        color: #999;
        text-align: center;
        padding-bottom: .16rem;
    }
    .activity-body{
        padding:.24rem 0 .3rem .3rem;
        a{
            display: inline-block;
            position: relative;
            width: 2.22rem;
            margin-right: .12rem;
            img{
                width:2.22rem;
                height:2.2rem;
                margin-bottom:.19rem;
            }
            .food-name{
                font-size: .26rem;
                color: #333;
                margin-bottom: .1rem;
            }
            .food-info{
                .price{
                    font-size:.26rem;
                    color: #ff5339;
                    margin-right:.07rem;
                }
                del{
                    font-size: .22rem;
                    color: #aaa;
                    max-width: 1.066667rem;
                    max-width: 10.666667vw;
                    display: inline-block;
                    vertical-align: middle;
                    text-decoration: line-through;
                }
            }
        }
    }
    .activity-more{
        padding: .3rem 0 .36rem 0;
        font-size: .26rem;
        color: #999;
        text-align: center;
    }
`