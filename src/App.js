import React                                   from 'react';
import store                                   from './redux/redux';
import { Provider }                            from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { withSuspense }                        from './common/HOC/withSuspense';
import 'antd/dist/antd.css';
import './App.css';

const HeaderC       = React.lazy(() => import('./common/Header/HeaderC'          ));
const MainC         = React.lazy(() => import('./components/Main/MainC'          ));
const CatalogC      = React.lazy(() => import('./components/Catalog/CatalogC'    ));
const NewsC         = React.lazy(() => import('./components/News/NewsC'          ));
const CalendarC     = React.lazy(() => import('./components/Calendar/CalendarC'  ));
const SubscribeC    = React.lazy(() => import('./components/Subscribe/SubscribeC'));
const SerialsPageC  = React.lazy(() => import('./common/SerialsPage/SerialsPageC'));
const NewsPageC     = React.lazy(() => import('./common/NewsPage/NewsPageC'      ));
// const Footer     = React.lazy(() => import('./common/Footer/Footer'           ));




class App extends React.Component {
  render () {
    return (
          <div className='gakis'>
            <Route path='/' render={withSuspense(HeaderC)} />
            <div className="app__loading_content">
              <Switch>
                <Route exact path='/'                render={withSuspense(MainC         )}/>
                <Route path='/catalog'               render={withSuspense(CatalogC      )}/>
                <Route path='/news'                  render={withSuspense(NewsC         )}/>
                <Route path='/calendar'              render={withSuspense(CalendarC     )}/>
                <Route path='/subscribe'             render={withSuspense(SubscribeC    )}/>
                <Route path='/serials/:serialsId?'   render={withSuspense(SerialsPageC  )}/>
                <Route path='/news/:newsId?'         render={withSuspense(NewsPageC     )}/>
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
