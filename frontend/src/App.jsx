import { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import AuthLayout from './layout/AuthLayout.jsx'
import Signup from './pages/Signup.jsx'
import  Login  from './pages/Login.jsx'
import Categories from './pages/Categories.jsx'
import Profile from './pages/Profile.jsx'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authActions } from './store/auth.js'
import AddPodcast from './pages/AddPodcast.jsx'
import AllPodcast from './pages/AllPodcast.jsx'
import CategoriesPage from './pages/CategoriesPage.jsx'
import DescriptionPage from './pages/DescriptionPage.jsx'

function App() {

  const[loginState,setloginState] = useState(false);

  const dispatch = useDispatch();

  useEffect(()=>{

    const fetch = async()=>{
      try {

        const res = await axios.get("http://localhost:2001/api/v1/check-cookie",{withCredentials:true});
        // console.log(res)
        setloginState(res.data.message)
        // console.log(loginState)
        
      } catch (error) {
         console.log(error)
      }

    }

    fetch();
  },[])

  useEffect(() => {
    if (loginState === true) {
      dispatch(authActions.login());
    }
  }, [loginState, dispatch]);
  

  return (


    <div>

      <Router>
        <Routes >

          <Route path="/" element={<MainLayout/>}> 
             <Route index element={<Home/>} />
             <Route path="/categories" element={<Categories/>}/>
             <Route path='/profile' element={<Profile/>} />
             <Route path='/add-podcast' element={<AddPodcast/>} />
             <Route path='/all-podcasts' element={<AllPodcast/>} />
             <Route path='/categories/:cat' element={<CategoriesPage/>} />
             <Route path='/description/:id' element={<DescriptionPage/>} />

          </Route>

          <Route path='/' element={<AuthLayout/>}>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/login' element={<Login/>}/>
          </Route>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
