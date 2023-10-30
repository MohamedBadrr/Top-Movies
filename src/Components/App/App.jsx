import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Outlet />
      <Footer />
    </div>

  );
}

export default App;
