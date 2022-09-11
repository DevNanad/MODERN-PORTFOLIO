import Footer from './components/Footer';
import Midnavbar from './components/Midnavbar';
import Navbar from './components/Navbar';
import SectionFive from './components/SectionFive';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionSix from './components/SectionSix';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


function App() {
  return (
    <div className="app">
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <Midnavbar/>
      <SectionThree/>

      {/* query client wrapper fron REACTQUERY */}
      <QueryClientProvider client={queryClient}>
        <SectionFour/>
      </QueryClientProvider>

      <SectionFive/>
      <SectionSix/>
      <Footer/>
    </div>
  );
}

export default App;
