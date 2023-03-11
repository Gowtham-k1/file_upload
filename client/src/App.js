import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Index from './compenents/Index';
import Viewfile from './compenents/viewfile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path='/viewfile' element={<Viewfile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
