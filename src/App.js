import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import HeaderC from './components/Header/HeaderC';
import MainC from './components/Main/MainC';
import CatalogC from './components/Catalog/CatalogC';
import NewsC from './components/News/NewsC';
import CalendarC from './components/Calendar/CalendarC';
import SubscribeC from './components/Subscribe/SubscribeC';

function App() {
  return (
    <BrowserRouter>
        <div className='gakis'>
          <Route path='/' render={() => <HeaderC />} />
          <div class="app__loading_content">
            <Switch>
              <Route exact path='/'    render={() => <MainC />      } />
              <Route path='/catalog'   render={() => <CatalogC />   } />
              <Route path='/news'      render={() => <NewsC />      } />
              <Route path='/calendar'  render={() => <CalendarC />  } />
              <Route path='/subscribe' render={() => <SubscribeC /> } />
            </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
