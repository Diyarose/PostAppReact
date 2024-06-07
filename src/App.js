import logo from './logo.svg';
import './App.css';
import AddName from './components/AddName';
import SearchName from './components/SearchName';
import DeleteName from './components/DeleteName';
import ViewName from './components/ViewName';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddName/>}/>
      <Route path='/search' element={<SearchName/>}/>
      <Route path='/delete' element={<DeleteName/>}/>
      <Route path='/view' element={<ViewName/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
