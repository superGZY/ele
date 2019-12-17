import styled from 'styled-components'

export const FindmoreWrap = styled.div`
    .db-credits{
        width:100%;
        height:1rem;
        position:sticky;
        z-index:10;
        top:0;
        left:0;
        display:flex;
        background:#fff;
        .left, .right{
            position:relative;
            width:50%;
            display:flex;
            align-content:center;
        }
        .left::after{
            content: "";
            width: .02rem;
            height: .6rem;
            background-color: #f2f2f2;
            right: 0;
            position: absolute;
            top:.2rem;
        }
        .db-credits-item_wrapper{
            margin-left:.4rem;
            display:flex;
            align-items:center;
            .db-credits-icon{
                background-image: url(//yun.duiba.com.cn/images/201910/5ct8k57k7w.jpg);
                width: .44rem;
                height: .44rem;
                margin-right: .12rem;
                background-size: contain;
                background-position: 50%;
                background-repeat: no-repeat;
            }
            p{
                line-height:1;
                span{
                    color:#333;
                    font-size:.22rem;
                    line-height:.4rem;
                }
                span:first-child{
                    color: rgb(253, 87, 70);
                }
            }
        }
    }
    .db-goods{
        background:#fff;
        ul{
            display:flex;
            flex-wrap: wrap;
            li{
                width:50%;
                padding-bottom:.2rem;
                border-bottom: .02rem solid #f2f2f2
                a{
                    .db-goods-item_image{
                        width: 100%;
                        background-color: #f8fafc;
                        overflow: hidden;
                        position: relative;
                        padding-top:62.2%;
                        img{
                            width:100%;
                            position:absolute;
                            top:0;
                            left:0;
                        }
                    }
                }
                .db-goods-item_detail-wrapper{
                    padding:0 .3rem;
                    .db-goods-item_title-container{
                        width:100%;
                        margin-top:.28rem;
                        font-size:.28rem;
                        color:#333;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow:ellipsis;
                        .db-goods-item_tag{
                            display: inline-block;
                            font-size: .24rem;
                            line-height: .3rem;
                            height: .34rem;
                            padding: .04rem .08rem;
                            color: #fff;
                            border-radius:.15rem;
                            position: relative;
                            text-align: center;
                            margin-right:.04rem;
                        }
                    }
                    .db-goods-item_exchange-detail{
                        margin-top:.08rem;
                        .db-goods-item-price{
                            font-size:.24rem;
                            line-height:1.5;
                        }
                        .goods-flex-right{
                            display:flex;
                            justify-content: flex-end;
                            div{
                                color: rgb(253, 87, 70);
                                border: 1px solid rgb(253, 87, 70);
                                width: 1rem;
                                height: .4rem;
                                border-radius: .2rem;
                                font-size: .24rem;
                                line-height: .4rem;
                                text-align:center;
                            }
                        }
                    }
                }
            }
            li:nth-child(odd) {
                border-right: .026667rem solid #f2f2f2;
                clear: left;
            }
        }
    }
`