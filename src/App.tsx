import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import { NewArrivalsPage } from './pages/NewArrivalsPage/NewArrivalsPage';
import { SalePage } from './pages/SalePage/SalePage';
import { BestSellersPage } from './pages/BestSellersPage/BestSellersPage';
import { AllItemsPage } from './pages/AllItemsPage/AllItemsPage';
import '../scss/main.scss';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/contacts" element={<ContactsPage />} />
          <Route index path="/product" element={<ProductPage />} />
          <Route index path="/new-arrivals" element={<NewArrivalsPage />} />
          <Route index path="/sales" element={<SalePage />} />
          <Route index path="/best-sellers" element={<BestSellersPage />} />
          <Route index path="/all-items" element={<AllItemsPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
