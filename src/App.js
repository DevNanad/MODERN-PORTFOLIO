import { 
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useTimelineStore } from './store/zustand'
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import ProDashboard from './protected/ProDashboard';
import ProLogin from './protected/ProLogin';

//Dashboard subpages
import DashHome from './pages/subpages/DashHome';
import DashStory from './pages/subpages/DashStory';
import DashExperience from './pages/subpages/DashExperience';
import DashMastery from './pages/subpages/DashMastery';
import DashProjects from './pages/subpages/DashProjects';



const router = createBrowserRouter(
  createRoutesFromElements(


    <Route>

          <Route path="/" element={<Home/>}/>


          <Route path="/admin/login"element={

            <ProLogin>
              <Login/>
            </ProLogin>
          }/>

          <Route path="/admin/dashboard" element={

            <ProDashboard>
              <Dashboard/>
            </ProDashboard>}
          >
            <Route index element={<DashHome/>}/>
            <Route path="mystory" element={<DashStory/>}/>
            <Route path="experience" element={<DashExperience/>}/>
            <Route path="projects" element={<DashProjects/>}/>
            <Route path="mastery" element={<DashMastery/>}/>


          </Route>

          <Route path='*' element={<NotFound/>}/>

    </Route>
  )
)



function App() {

  const { checklogin, setUsername } = useTimelineStore((state) => state)

  //check if token already exist in local storage
  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
        checklogin(user)
        setUsername(user.username)
    }

    
  }, [])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
