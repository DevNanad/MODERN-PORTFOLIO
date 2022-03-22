import { motion } from 'framer-motion'
import Midnavbar from './components/Midnavbar';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <Midnavbar/>
      <SectionThree/>
    </div>
  );
}

export default App;
