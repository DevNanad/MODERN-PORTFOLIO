import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useTimelineStore } from './store/zustand'
import Dashboard from './pages/Dashboard';


function App() {


  const { checklogin } = useTimelineStore((state) => state)

  //check if token already exist in local storage
  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
        checklogin(user)
    }
    
  }, [])

  return (
    <div className="app">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin/login"element={<Login/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>


        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
