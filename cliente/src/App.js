import logo from './logo.svg';
import './App.css';

import ListaNota from './ListaNota';
import AgregarNota from './AgregarNota';
import EditarNota from './EditarNota';

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <div className="container">
            <a className="navbar-brand" href="/">Crud de Notas</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="agregarnota">Agregar Notas</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaNota/>} exact></Route>
        <Route path='/agregarnota' element={<AgregarNota/>} exact></Route>
        <Route path='/editarnota/:idNota' element={<EditarNota/>} exact></Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
