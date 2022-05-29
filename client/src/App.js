import {
    Route,
    Routes,
    BrowserRouter
} from 'react-router-dom'


import { ReactSession } from 'react-client-session';


import './App.css';
import Home from './compenents/pages/main/Home';
import AddArticle from './compenents/pages/AddArticle/AddArticle';
import Login from './compenents/pages/login/Login';
import Register from './compenents/pages/login/Register';


ReactSession.setStoreType("localStorage");
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/addArticle' element={<AddArticle/>} />
          <Route path='/register' element={<Register/>} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
