import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Layout from './layout/Layout';
import MySchool from './pages/MySchool';
import MyInterview from './pages/MyInterview';
import MyGame from './pages/MyGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/sharing-knowledge" />} />
          <Route path="/sharing-knowledge" element={<MySchool />} />
          <Route path="/my-interview" element={<MyInterview />} />
          <Route path="/brain-game" element={<MyGame />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
