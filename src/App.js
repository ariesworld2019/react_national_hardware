import './App.css';
import UserMaster from './components/UserMaster';
import ItemCategoryMaster from './components/ItemCategoryMaster';
import SubItemMaster from './components/SubItemMaster';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router basename="/">
            <div>
                <Routes>
                    <Route path="/" element={<UserMaster />} />
                    <Route path="/usermaster" element={<UserMaster />} />
                    <Route path="/productcatagorymaster" element={<ItemCategoryMaster />} />
                    <Route path="/itemmaster" element={<SubItemMaster />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
