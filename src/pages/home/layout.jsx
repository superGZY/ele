import React from 'react'

import { TabBar } from 'antd-mobile';
import { Ele, Find } from './index.js'
import { Layoutwrap } from './layout'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }
  

  render() {
    //json-server restaurants.json --routes routes.json --port 3001
    return (
      <Layoutwrap style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="index"
            icon={
            <svg viewBox="0 0 22 22" id="h5-component-index" width="20px" height="20px">
                <path fill="#8e8e93" fillRule="evenodd" d="M16.822 17.089l.456.707c.212.33.14.778-.174 1.033a9.91 9.91 0 0 1-.767.555 9.817 9.817 0 0 1-7.473 1.395 9.867 9.867 0 0 1-6.265-4.334C-.383 11.822.927 5.618 5.52 2.616a9.81 9.81 0 0 1 7.475-1.394 9.866 9.866 0 0 1 6.264 4.334c.166.258.323.528.466.803.19.385.072.82-.262 1.039l-9.05 5.916a.783.783 0 0 1-1.086-.232l-.47-.73a1.668 1.668 0 0 1 .484-2.295l5.766-3.769a.286.286 0 0 0 .03-.455 6.576 6.576 0 0 0-7.821-.434 6.636 6.636 0 0 0-2.877 4.213 6.671 6.671 0 0 0 .926 5.026c1.99 3.085 6.104 3.968 9.17 1.969a1.65 1.65 0 0 1 2.288.482zm3.878-5.445c.56.863.314 2.02-.549 2.58l-.906.59a.786.786 0 0 1-1.086-.232l-1.177-1.812a.787.787 0 0 1 .23-1.086l1.813-1.176a.783.783 0 0 1 1.086.23l.589.906z"></path>
            </svg>
            }   
            selectedIcon={
            <svg viewBox="0 0 22 22" id="h5-component-index" width="20px" height="20px">
              <path fill="#0089dc" fillRule="evenodd" d="M16.822 17.089l.456.707c.212.33.14.778-.174 1.033a9.91 9.91 0 0 1-.767.555 9.817 9.817 0 0 1-7.473 1.395 9.867 9.867 0 0 1-6.265-4.334C-.383 11.822.927 5.618 5.52 2.616a9.81 9.81 0 0 1 7.475-1.394 9.866 9.866 0 0 1 6.264 4.334c.166.258.323.528.466.803.19.385.072.82-.262 1.039l-9.05 5.916a.783.783 0 0 1-1.086-.232l-.47-.73a1.668 1.668 0 0 1 .484-2.295l5.766-3.769a.286.286 0 0 0 .03-.455 6.576 6.576 0 0 0-7.821-.434 6.636 6.636 0 0 0-2.877 4.213 6.671 6.671 0 0 0 .926 5.026c1.99 3.085 6.104 3.968 9.17 1.969a1.65 1.65 0 0 1 2.288.482zm3.878-5.445c.56.863.314 2.02-.549 2.58l-.906.59a.786.786 0 0 1-1.086-.232l-1.177-1.812a.787.787 0 0 1 .23-1.086l1.813-1.176a.783.783 0 0 1 1.086.23l.589.906z"></path>
            </svg>
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <Ele></Ele>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <svg viewBox="0 0 22 22" id="h5-component-discover" width="20px" height="20px">
                <path fill="#8e8e93" fillRule="evenodd" d="M3.929 3.929c3.899-3.9 10.243-3.9 14.142 0 3.899 3.899 3.899 10.243 0 14.142-3.899 3.9-10.243 3.9-14.142 0-3.9-3.899-3.9-10.243 0-14.142zM14.639 7a.363.363 0 0 0-.146.03l-4.39 1.901c-.254.11-.493.264-.701.471a2.23 2.23 0 0 0-.476.712l-1.896 4.38a.363.363 0 0 0 .476.476l4.38-1.896a2.203 2.203 0 0 0 1.183-1.178l1.9-4.39A.363.363 0 0 0 14.64 7zM11 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
              </svg>
            }
            selectedIcon={
              <svg viewBox="0 0 22 22" id="h5-component-discover" width="20px" height="20px">
                <path fill="#0089dc" fillRule="evenodd" d="M3.929 3.929c3.899-3.9 10.243-3.9 14.142 0 3.899 3.899 3.899 10.243 0 14.142-3.899 3.9-10.243 3.9-14.142 0-3.9-3.899-3.9-10.243 0-14.142zM14.639 7a.363.363 0 0 0-.146.03l-4.39 1.901c-.254.11-.493.264-.701.471a2.23 2.23 0 0 0-.476.712l-1.896 4.38a.363.363 0 0 0 .476.476l4.38-1.896a2.203 2.203 0 0 0 1.183-1.178l1.9-4.39A.363.363 0 0 0 14.64 7zM11 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
              </svg>
            }
            title="发现"
            key="find"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
              <Find></Find>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <svg viewBox="0 0 22 22" id="h5-component-orderRegular" width="20px" height="20px">
                <path fill="#8e8e93" fillRule="nonzero" d="M7.25 8a.75.75 0 0 1 0-1.5h7.5a.75.75 0 1 1 0 1.5h-7.5zm0 5.004a.75.75 0 1 1 0-1.5h4.498a.75.75 0 1 1 0 1.5H7.25zM3.5 3v16h9.75c2.9 0 5.25-2.35 5.25-5.25V5.748a.75.75 0 1 1 1.5 0v8.002a6.75 6.75 0 0 1-6.75 6.75H2.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 1 1 0 1.5H3.5z"></path>
              </svg>
            }
            selectedIcon={
              <svg viewBox="0 0 22 22" id="h5-component-orderRegular" width="20px" height="20px">
                <path fill="#0089dc" fillRule="nonzero" d="M7.25 8a.75.75 0 0 1 0-1.5h7.5a.75.75 0 1 1 0 1.5h-7.5zm0 5.004a.75.75 0 1 1 0-1.5h4.498a.75.75 0 1 1 0 1.5H7.25zM3.5 3v16h9.75c2.9 0 5.25-2.35 5.25-5.25V5.748a.75.75 0 1 1 1.5 0v8.002a6.75 6.75 0 0 1-6.75 6.75H2.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 1 1 0 1.5H3.5z"></path>
              </svg>
            }
            title="订单"
            key="order"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
              <div>q</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <svg viewBox="0 0 22 22" id="h5-component-profileRegular" width="20px" height="20px">
                <path fill="#818181" fillRule="nonzero" d="M10.955 12H7.75a5.25 5.25 0 0 0-5.25 5.25v2.25h17v-2.25a5.244 5.244 0 0 0-2.626-4.548.75.75 0 0 1 .75-1.3l.183.11A6.745 6.745 0 0 1 21 17.25v3a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-3a6.75 6.75 0 0 1 6.436-6.743A4.984 4.984 0 0 1 6 7V6a5 5 0 0 1 10 0v1a5 5 0 0 1-5.045 5zM11 10.5A3.5 3.5 0 0 0 14.5 7V6a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 0 0 3.5 3.5z"></path>
              </svg>
            }
            selectedIcon={
              <svg viewBox="0 0 22 22" id="h5-component-profileRegular" width="20px" height="20px">
                <path fill="#0089dc" fillRule="nonzero" d="M10.955 12H7.75a5.25 5.25 0 0 0-5.25 5.25v2.25h17v-2.25a5.244 5.244 0 0 0-2.626-4.548.75.75 0 0 1 .75-1.3l.183.11A6.745 6.745 0 0 1 21 17.25v3a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-3a6.75 6.75 0 0 1 6.436-6.743A4.984 4.984 0 0 1 6 7V6a5 5 0 0 1 10 0v1a5 5 0 0 1-5.045 5zM11 10.5A3.5 3.5 0 0 0 14.5 7V6a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 0 0 3.5 3.5z"></path>
              </svg>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
              <div>q</div>
          </TabBar.Item>
        </TabBar>

      </Layoutwrap>
    );
  }
}
export default Layout