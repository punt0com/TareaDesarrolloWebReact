import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/pages/home/home';
import Header from './components/layout/header/header copy';
import Footer from './components/layout/footer/footer';
import Content from './components/layout/content/content';
import CompleteList from './components/pages/completeList/completeList';
import AddProduct from './components/pages/addProduct/addProduct';
import OrderStuck from './components/pages/orderStuck/orderStuck';
import SpecificSearch from './components/pages/specificSearch/specificSearch';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app__main-content">
          <Content />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/completeList" element={<CompleteList />} />
            <Route path="/specificSearch" element={<SpecificSearch />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/orderStuck" element={<OrderStuck />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;