import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useTimelineStore } from './store/zustand'


function App() {


  const { checklogin } = useTimelineStore((state) => state)

  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
        checklogin(user)
        console.log(user);
    }
  }, [])

  return (
    <div className="app">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
