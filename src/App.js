import React from 'react';
import store from './redux/redux';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { withSuspense } from './common/HOC/withSuspense';
import 'antd/dist/antd.css';
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css'
import './style/ant/Rate.css'
import './style/ant/select.css'
import './style/ant/switch.css'
import 'react-quill/dist/quill.snow.css'; 
import './style/fonts.css'
import './App.css';
import DarkStyles from './common/Theme/Dark';
import LightStyles from './common/Theme/Light';

const HeaderC      = React.lazy(() => import('./common/Header/HeaderC'));
const MainC        = React.lazy(() => import('./components/Main/MainC'));
const CatalogC     = React.lazy(() => import('./components/Catalog/CatalogC'));
const NewsC        = React.lazy(() => import('./components/News/NewsC'));
const CalendarC    = React.lazy(() => import('./components/Calendar/CalendarC'));
const SubscribeC   = React.lazy(() => import('./components/Subscribe/SubscribeC'));
const ProfileC     = React.lazy(() => import('./components/Profile/ProfileC'));
const SerialsPageC = React.lazy(() => import('./common/SerialsPage/SerialsPageC'));
const LoginC       = React.lazy(() => import('./components/Login/LoginC'));
const AdminC       = React.lazy(() => import('./components/ADMIN/AdminC'));

class App extends React.Component {

  componentDidMount() {
    if (window['localStorage'] !== null) {
      window.localStorage.getItem('theme') === 'light'
        ? this.switchLightTheme()
        : this.switchDarkTheme()
    }
  }

  switchLightTheme() {
    window.localStorage.setItem('theme', 'light')
    const style = document.createElement('style');
    document.head.appendChild(style)
    style.innerHTML = LightStyles
  }

  switchDarkTheme() {
    window.localStorage.setItem('theme', 'dark')
    const style = document.createElement('style');
    document.head.appendChild(style)
    style.innerHTML = DarkStyles
  }

  render() {
    return (
      <div className='gakis'>
        <Route path='/' render={withSuspense(HeaderC)} />
        <div className={"app__loading_content"}>
          <Switch>
            <Route exact path='/'                         render={withSuspense(MainC)} />
            <Route path='/profile/:userId?/:options?/'    render={withSuspense(ProfileC)} />
            <Route path='/catalog'                        render={withSuspense(CatalogC)} />
            <Route path='/news/:postId?'                  render={withSuspense(NewsC)} />
            <Route path='/calendar'                       render={withSuspense(CalendarC)} />
            <Route path='/subscribe'                      render={withSuspense(SubscribeC)} />
            <Route path='/serials/:serialsId/:seriesId?'  render={withSuspense(SerialsPageC)} />
            <Route path='/login'                          render={withSuspense(LoginC)} />
            <Route path='/admin'                          render={withSuspense(AdminC)} />
            <Route path='*'                               render={() => <div>404</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}






const AppContainer = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>

        <App />

      </Provider>
    </HashRouter>
  )
}


export default AppContainer;
