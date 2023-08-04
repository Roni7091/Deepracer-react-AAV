import './App.css';
import Contact from './components/Contact';
import Leaderboard from './components/Leaderboard';
import Loginpage from './components/Loginpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstpage from './components/Firstpage';
// import Secondpage from './components/Secondpage';
import Racetracks1 from './components/Racetracks1';
import Group from './components/Group';
import About from './components/About';

function App() {
  return (
    <Router>
       <Routes>
       <Route path="/" element={<Firstpage/>} />
       <Route path="/loginpage" element={<Loginpage/>} />
       <Route path="/secondnew" element={<Group/>} />
       <Route path="/fourth" element={<Racetracks1/>} />
       <Route path="/leader" element={<Leaderboard/>} />
       <Route path="/aboutpage" element={<About/>} />
       <Route path="/contactpage" element={<Contact/>} />
       </Routes>
     </Router>


    // <div className="App">
    // {/* <Secondpage/> */}
    // {/* <Firstpage/> */}
    // {/* <Racetracks/> */}
    // {/* <Racetracks1/> */}
    // {/* <Group/> */}
    // {/* <Racetracksduplicate/> */}
    // {/* <About/> */}
    // {/* <Leaderboard/> */}
    // {/* <Contact/> */}
    // {/* <Loginpage/> */}
    // </div>
  );
}

export default App;
