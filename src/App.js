
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/details/:id' element={<JobDetails></JobDetails>}></Route>
     </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
