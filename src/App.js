import './App.css';
import Cover from './pages/Cover';
/* property pages */
import Search from './pages/Search';
import Apartment from './pages/Apartment';
import ApartmentDetails from './pages/ApartmentDetails';
import Condo from './pages/Condo';
import CondoDetails from './pages/CondoDetails';
import Details from './pages/Details';
import Home from './pages/Home';
import HomeDetails from './pages/HomeDetails';
import Property from './pages/Property';
import TownHouse from './pages/TownHouse';
import TownDetails from './pages/TownDetails';
/* contact pages */
import About from './pages/About';
import Contact from './pages/Contact';
/* realtor pages */
import Agent from './pages/Agent';
import AgentsDetail from './pages/AgentsDetail';
/* profile pages */
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

/* admin pages */
// import PropertyEdit from './pages/PropertyEdit';
// import UserEdit from './pages/UserEdit';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/Search/" element={<Search />} />
        <Route path="/Apartment/" element={<Apartment />} />
        <Route path="Apartments/:apartmentId" element={<ApartmentDetails />} />
        <Route path="/Condo/" element={<Condo />} />
        <Route path="Condos/:condoId" element={<CondoDetails />} />
        <Route path="/Home/" element={<Home />} />
        <Route path="Homes/:homeId" element={<HomeDetails />} />
        <Route path="/Property/" element={<Property />} />
        <Route path="Properties/:propertyId" element={<Details />} />
        <Route path="/TownHouse/" element={<TownHouse />} />
        <Route path="/TownHouse/:townhomeId" element={<TownDetails />} />
        <Route path="Agents/:agentId" element={<AgentsDetail />} />
        <Route path="/Agent" element={<Agent />} />
        <Route path="/Contact/" element={<Contact />} />
        <Route path="/About" element={<About />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />

        {/* <Route path="/admin/:id/edit" element={<PropertyEdit />} /> */}
        {/* <Route path="/admin/User/:id/edit" element={<userEdit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
