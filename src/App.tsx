import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CarDetail from './pages/CarDetail';
import Gallery from './pages/Gallery';
import Promotions from './pages/Promotions';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/katalog/:id" element={<CarDetail />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/promo" element={<Promotions />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;