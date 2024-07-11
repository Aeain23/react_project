import './App.css';
import MenuNavbar from './components/MenuNavbar/MenuNavbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <MenuNavbar />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
