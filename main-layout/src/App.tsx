import { Suspense } from 'react';
import Router from './router/Router';
import LoadingPage from './components/LoadingPage.tsx';
function App() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <>
          <Router />
        </>
      </Suspense>
    </>
  );
}

export default App;
