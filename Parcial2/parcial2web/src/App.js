import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login';
import CoffeeList from './coffeeList';
import CoffeeDetail from './coffeeDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';

const AppWithRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/coffee-list" element={<CoffeeList />} />
            <Route path="/coffee/:id" element={<CoffeeDetail />} />
        </Routes>
    </Router>
);

export default AppWithRouter;
