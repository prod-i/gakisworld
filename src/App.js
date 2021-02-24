import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import HeaderC from './components/Header/HeaderC';

function App() {
  return (
    <BrowserRouter>
        <div className='gakis'>
          <Route path='/' render={() => <HeaderC />} />
          <div class="app__loading_content">
          <Switch>
            <Route exact path='/'    render={() => <>главная</>  } />
            <Route path='/catalog'   render={() => <>каталог</>  } />
            <Route path='/news'      render={() => <>Новости</>  } />
            <Route path='/calendar'  render={() => <>Календарь</>} />
            <Route path='/subscribe' render={() => <>подписка</> } />
          </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
