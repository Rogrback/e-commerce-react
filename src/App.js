import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element = {
            <Home/>
          }
        />
        <Route
          path='product/:id'
          element = {
            <Product/>
          }
        />
      </Routes>
    </Router>
  );
}

