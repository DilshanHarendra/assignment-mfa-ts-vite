import './App.css';
import Router from './router/Router.tsx';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

function App({ props }) {
  useEffect(() => {
    console.log('data coming from parent to users ', props.user);
  }, [props]);

  return (
    <>
      <BrowserRouter basename='analytics'>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
