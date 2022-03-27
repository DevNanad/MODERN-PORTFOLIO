import { motion } from 'framer-motion'
import Midnavbar from './components/Midnavbar';
import Navbar from './components/Navbar';
import SectionFour from './components/SectionFour';
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
      <SectionFour/>
    </div>
  );
}

export default App;
