import {Products} from "./components/Products";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ProductCreate} from "./components/ProductCreate";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Products />}/>
      <Route path="/create" element = {< ProductCreate />}/>
    </Routes>
  </BrowserRouter>;

}

export default App;
