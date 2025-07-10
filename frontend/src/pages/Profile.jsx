import React from 'react'
import { useSelector } from 'react-redux'
import ErrorPage from './ErrorPage';
import Header from '../components/Profile/Header';
import YourPodcast from '../components/Profile/YourPodcast.jsx';

const Profile = () => {

    const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);

  return (
    <>{!isLoggedIn ? <ErrorPage/> : (
        <div>
            <Header/>
            <YourPodcast/>
        </div>
    )}</>
  )
}

export default Profile