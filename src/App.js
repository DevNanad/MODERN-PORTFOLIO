import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useTimelineStore } from './store/zustand'
import Dashboard from './pages/Dashboard';


function App() {


  const { checklogin, token } = useTimelineStore((state) => state)

  //check if token already exist in local storage
  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
        checklogin(user)
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

          <Route path="/admin/login"element={token ? <Navigate to="/admin/dashboard" replace /> :  <Login />}/>

          <Route path="/admin/dashboard" element={!token ? <Navigate to="/admin/login" replace /> :  <Dashboard />}/>


        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
