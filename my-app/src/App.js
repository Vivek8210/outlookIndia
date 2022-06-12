import logo from './logo.svg';
import './App.css';
import Footer from './footer/Footer';
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes';
import OutlookLogo from './components/OutlookLogo';
function App() {
  return (
    <div className="App">
      <OutlookLogo/>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
