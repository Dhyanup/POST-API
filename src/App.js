import logo from './logo.svg';
import './App.css';
import Addpost from './components/Addpost';
import Searchpost from './components/Searchpost';
import Deletepost from './components/Deletepost';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Addpost />} />
    <Route path="/delete" element={<Deletepost />} />
    <Route path="/search" element={<Searchpost />} />
    <Route path="/viewall" element={<Viewall />} />

    


   </Routes>
   </BrowserRouter>
  );
}

export default App;
