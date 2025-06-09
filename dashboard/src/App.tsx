import './App.css';
import Router from './router/Router.tsx';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

function App({props}) {
  useEffect(() => {
    console.log('data coming from parent to Dashboard', props.user);
  }, [props]);
  return (
    <>
      <BrowserRouter basename={'dashboard'}>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
