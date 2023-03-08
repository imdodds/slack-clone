import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from 'react-spinkit';
import { AppBody, AppLoading, AppLoadingContents } from './styles/App.style';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src='https://cdn.iconscout.com/icon/free/png-512/slack-logo-1481728-1254330.png?f=avif&w=256'
            alt=''
          />

          <Spinner
            name='ball-spin-fade-loader'
            color='purple'
            fadeIn='none'
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Home />}>
                </Route>
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
