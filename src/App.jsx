import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Menu from './components/Menu';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function AppContent() {
  const { theme } = useTheme();

  let bgColor = 'white';
  let textColor = 'black';
  if (theme === 'dark') {
    bgColor = '#222';
    textColor = 'white';
  }

  const appStyles = {
    backgroundColor: bgColor,
    color: textColor,
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s'
  };

  return (
    <div style={appStyles}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}