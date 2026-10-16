import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

export default function Menu() {
    const { theme, toggleTheme } = useTheme();
    const { cart } = useCart();

    let textColor = 'black';
    if (theme === 'dark') {
        textColor = 'white';
    }

    return (
        <nav style={{ marginBottom: '20px', padding: '10px', borderBottom: '2px solid gray' }}>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    marginRight: '15px', color: isActive ? 'red' : textColor, fontWeight: 'bold'
                })}
            >
                Главная
            </NavLink>

            <NavLink
                to ="/cart"
                style={({ isActive }) => ({
                    marginRight: '15px', color: isActive ? 'red' : textColor, fontWeight: 'bold'
                })}
            >
                Корзина ({cart.length})
            </NavLink>

            <NavLink
                to="/login"
                style={({ isActive }) => ({
                    marginRight: '15px', color: isActive ? 'red' : textColor, fontWeight: 'bold'
                })}
            >
                Вход
            </NavLink>

            <NavLink
                to="/dashboard"
                style={({ isActive }) => ({
                    marginRight: '15px', color: isActive ? 'red' : textColor, fontWeight: 'bold' 
                })}
            >
                Кабинет
            </NavLink>

            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
            </button>
        </nav>
    );
}