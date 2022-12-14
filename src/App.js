
import './App.css';
import Intro from './componen/Intro';
import NavigationBar from './componen/NavigationsBar';
import "./style/Lanidngpage.css"


function App() {
  return (
    <div>
      <div className="myBG border">
        <NavigationBar/>
        <Intro/>
      </div>
    </div>
  );
}

export default App;
