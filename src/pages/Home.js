import Footer from '../components/Footer';
import Midnavbar from '../components/Midnavbar';
import Navbar from '../components/Navbar';
import SectionFive from '../components/SectionFive';
import SectionFour from '../components/SectionFour';
import SectionOne from '../components/SectionOne';
import SectionSix from '../components/SectionSix';
import SectionThree from '../components/SectionThree';
import SectionTwo from '../components/SectionTwo';
import { QueryClient, QueryClientProvider } from 'react-query'

import { SkeletonTheme } from 'react-loading-skeleton'

const queryClient = new QueryClient()


function Home() {
  return (
    <div className="app">

      <SkeletonTheme baseColor="#1f2c45" highlightColor="#2a3c5e">
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
      </SkeletonTheme>
    </div>
  );
}

export default Home;
