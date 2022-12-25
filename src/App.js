import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useTimelineStore } from './store/zustand'
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';


function App() {


  const { checklogin, token, setUsername } = useTimelineStore((state) => state)

  //check if token already exist in local storage
  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
        checklogin(user)
        setUsername(user.username)
    }
    if(!user){
      <Navigate to="/admin/login" replace={true} />
    }
    
  }, [])

  return (
    <div className="app">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/admin/login"element={token ? <Navigate to="/admin/dashboard" replace={true} /> :  <Login />}/>

          <Route path="/admin/dashboard" element={!token ? <Navigate to="/admin/login" replace={true} /> :  <Dashboard />}/>

          <Route path='*' element={<NotFound/>}/>


        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
