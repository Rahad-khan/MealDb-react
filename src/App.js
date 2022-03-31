import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Compo/About/About';
import Error from './Compo/Error/Error';
import Header from './Compo/Header/Header';
import Meals from './Compo/Meals/Meals';

function App() {
  return (
    <div className='w-5/6 mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
        <Route path='/search' element={<Meals/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
