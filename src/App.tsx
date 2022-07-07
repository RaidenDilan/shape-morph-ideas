import React, { lazy, Suspense, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './hoc/Layout';
import { GlobalProvider } from './hooks/GlobalContext';

import { Spinner } from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';

const Main = lazy(() => import('./screens/Main'));
const NotFound = lazy(() => import('./screens/NotFound'));

const App = () => {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <GlobalProvider>
      <div ref={nodeRef}>
        <Layout>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </div>
    </GlobalProvider>
  );
};

export default App;
