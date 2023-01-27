import './App.css';
import Main from './Components/js/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'element={<Main/>}/>
      </Routes>
    </>
  );
}

export default App;
