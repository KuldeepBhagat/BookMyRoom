import { Routes, Route, useNavigate} from 'react-router-dom'
import Home from './components/pages/home'
import Map from './components/pages/map'

export  default function App() {
const navigate = useNavigate();

  // Now these functions will work because they are inside a Router context!
  const redirectMap = () => navigate('/testing');
  const redirectHome = () => navigate('/');

  return (
    <div>
      {/* Temporary buttons to test navigation */}
      <nav className="p-4 bg-gray-100 flex gap-4">
        <button onClick={redirectHome} className="border p-1">Go Home</button>
        <button onClick={redirectMap} className="border p-1">Go Map</button>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/testing' element={<Map />}/>
      </Routes>
    </div>
  );
}