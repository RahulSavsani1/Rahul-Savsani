import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footers.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className='App min-h-screen flex flex-col'>
      <Navbar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;