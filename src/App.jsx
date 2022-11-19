import { BrowserRouter as Router , Routes  , Route  } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';

function App() {  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
          
      </div>
    </Router>
  );
}


{
  /* We Need A React Router */
}

{
  /* localhost.com/ */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}
export default App;
