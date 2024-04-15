import {Routes, Route, Outlet} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';
import Login from './pages/Login';
import Favourites from './pages/Favourites';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="favorites" element={<Favourites />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;