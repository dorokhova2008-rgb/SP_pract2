import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Cart() {
    const { cart, removeFromCart, totalPrice } = useCart();
    const { theme } = useTheme();
    const navigate = useNavigate();

    let itemStyle = {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        backgroundColor: 'white',
        color: 'black'
    };

    if (theme === 'dark') {
        itemStyle.backgroundColor = '#444';
        itemStyle.color = 'white';
        itemStyle.border = '1px solid #666';
    }

    return (
        <div>
            <h1>Ваша корзина</h1>

            {cart.length === 0 && <p>Корзина пуста </p>}

            {cart.length > 0 && (
                <div>
                    {cart.map(function(item, index) {
                        return (
                            <div key={index} style={itemStyle}>
                                <span>{item.name} — ${item.price}</span>
                                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                                    Удалить
                                </button>
                            </div>
                        );
                    })}
                    <h2>Итого: ${totalPrice}</h2>
                </div>
            )}

            <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px' }}>
                Вернуться в каталог
            </button>
        </div>
    );
}