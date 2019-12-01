import React                from 'react';
import { BrowserRouter }    from 'react-router-dom';
import Routes               from './routes';
import GlobalStyles         from './styles/global';
import Header               from './components/Header';
import { Provider}          from 'react-redux';
import { ToastContainer}    from 'react-toastify';

import './config/ReactotronConfig';
import store                from './store'

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000}/>
        </BrowserRouter>
      </Provider>
      
  );

  
}

export default App;
