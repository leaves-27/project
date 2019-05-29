'use strict';

import React, { Component, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import {
  actions as routerActions,
  NavBar,
  Route,
  Router,
  Schema,
  TabBar,
  TabRoute
} from 'react-native-router-redux';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import Notice from '../components/Notice';
import About from '../components/About';

const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});

const defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#FFFFFF',
  navTint: '#224655',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'light-content',
  tabBar: TabBar,
};

const assets = {
  'notice': require('../../assets/thin-0021_calendar_month_day_planner.png'),
  'home': require('../../assets/thin-0046_home_house.png'),
  'logo': require('../../assets/qwikly.png'),
  'about': require('../../assets/thin-0091_file_profile_user_personal.png'),
  'video': require('../../assets/thin-0592_tv_televison_movie_news.png'),
};

class Application extends Component {
  render() {
    return (
      <Router {...this.props} assets={assets} initial="signIn">
        <Schema name="default" {...defaultSchema} />
        <Route name="signIn" component={SignIn} type="reset" hideNavBar={true} />
        <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
          <Route name="tab1" component={Home('#111')} title="首页" tabItem={{icon: assets['home'], title: '首页'}} />
          <Route name="tab2" component={Notice('#222')} title="公告" tabItem={{icon: assets['notice'], title: '公告'}} />
          <Route name="tab3" component={About('#333')} title="关于" tabItem={{icon: assets['about'], title: '关于'}} />
        </TabRoute>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
