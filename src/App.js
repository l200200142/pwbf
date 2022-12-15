
import './App.css';
import Intro from './componen/Intro';
import NavigationBar from './componen/NavigationsBar';
import Page from './componen/page';
import "./style/Landingpage.css"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Daftarmenu from './componen/Daftarmenu';


function App() {
  return (
      <div className="myBG">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='page' element={<Page/>}/> 
          <Route path='/' element={<Intro/>}/>
          <Route path='daftarmenu' element={<Daftarmenu/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
