import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Individual from './component/Individual';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/individual/:id' element={<Individual/>}/>
    </Routes>

    </>
  );
}

export default App;
