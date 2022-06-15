import logo from './logo.svg';

import Footer from './footer/Footer';
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes';
import OutlookLogo from './components/OutlookLogo';

function App() {
  return (
    <div >
      <OutlookLogo/>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      
    </div>
  );
}

export default App;
