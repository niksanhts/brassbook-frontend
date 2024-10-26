import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import SignIn from "./pages/signIn/SignIn.jsx";
import Compositions from "./pages/compositions/Compositions.jsx";
import User from "./pages/user/User.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { $api } from './api/index.js';
import { setIsAuthorized, setUser } from './store/userSlice.js';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkAuthentication = useCallback(async () => {
    const accessToken = localStorage.getItem('accessToken');

    let userData = null;
    const { data: user } = await $api.post('/v1/auth/check', {
      accessToken,
    })
    userData = user;
    if (user?.errorCode) {
      const { data: updatedToken } = await $api.get('/v1/auth/refresh')
      if (updatedToken.errorCode) {
        navigate('/signin')
      }
      localStorage.setItem('token', updatedToken.accessToken);
      const { data: user } = await $api.post('/v1/auth/check', {
        accessToken: updatedToken.accessToken,
      })

      if (user?.errorCode) {
        navigate('/signin')
      }
      userData = user;
    }

    dispatch(setIsAuthorized(true))
    dispatch(setUser(userData.user))
  }, [dispatch, navigate])

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="signin" >
          <Route index element={<SignIn />} />
        </Route>
        <Route path="signup" >
          <Route index element={<SignUp />} />
        </Route>
        <Route path="compositions">
          <Route index element={<Compositions />} />
        </Route>
        <Route path="user">
          <Route index element={<User />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
