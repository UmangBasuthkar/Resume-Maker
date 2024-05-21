import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ResumeForm from './components/ResumeForm';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />}></Route>
        <Route path = '/ResumeForm' element = {<ResumeForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
