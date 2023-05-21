import { Home } from 'pages/home/Home';
import { Tweets } from 'pages/tweets/Tweets';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './navigation/Navigation';
import { Suspense } from 'react';

export const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
