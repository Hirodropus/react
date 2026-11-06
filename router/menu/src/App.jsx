import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Home from './pages/Home.jsx';
import Drift from './pages/Drift.jsx';
import TimeAttack from './pages/TimeAttack.jsx';
import Forza from './pages/Forza.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drift" element={<Drift />} />
          <Route path="/timeattack" element={<TimeAttack />} />
          <Route path="/forza" element={<Forza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}