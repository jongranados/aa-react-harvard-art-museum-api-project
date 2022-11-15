import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import GalleryNavigation from './components/GalleryNavigation';

const Root = () => { 
  return (
    <BrowserRouter> 
      <App />
      {/* <GalleryNavigation /> */}
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
