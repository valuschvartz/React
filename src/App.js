import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import {inicio} from './paginas/inicio';
import contacto from './paginas/contacto';
import destacado from './paginas/destacado';
import informacion from './paginas/informacion';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/> 
        <ItemListContainer greeting="Bienvenido a mi tienda en línea" />
        <Routes>
          <Route path='/' element={<inicio/>}/>
          <Route path='/contacto' element={<contacto/>}/>
          <Route path='/destacado' element={<destacado/>}/>
          <Route path='/informacion' element={<informacion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
