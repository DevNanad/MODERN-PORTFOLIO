import Midnavbar from './components/Midnavbar';
import Navbar from './components/Navbar';
import SectionFive from './components/SectionFive';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionSix from './components/SectionSix';
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
      <SectionFive/>
      <SectionSix/>
    </div>
  );
}

export default App;
