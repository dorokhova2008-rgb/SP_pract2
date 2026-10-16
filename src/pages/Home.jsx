import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../index.css';
import yacht1 from '../assets/cat.jpg';
import yacht2 from '../assets/rich.jpg';
import yacht3 from '../assets/ya.jpg';
import yacht4 from '../assets/ya1.jpg';
import yacht5 from '../assets/ya2.jpg';


export default function Home() {
    const { addToCart } = useCart();
    const { theme } = useTheme();
    const navigate = useNavigate();

    function handleAdd(product) {
    addToCart(product);
    navigate('/cart');
    }

    let cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '15px',
        width: '220px',
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    };

    if (theme === 'dark') {
        cardStyle.backgroundColor = '#444';
        cardStyle.color = 'white';
        cardStyle.border = '1px solid #666';
    }

    const products = [
        {id: 1,name: 'Яхта "Мечта"',price: 50000,image: yacht1},
        {id: 2,name: 'Круизер "Волна"',price: 120000,image: yacht2},
        {id: 3,name: 'Лодка "Успех"',price: 85000,image: yacht3},
        {id: 4,name: 'Катер "Ветер"',price: 30000,image: yacht4},
        {id: 5,name: 'Яхта "Звезда"',price: 200000,image: yacht5}
    ];
    return (
        <div>
            <h1>Каталог яхт</h1>
            <div className="product-grid">
                {products.map(function(product) {
                    return (
                        <div key={product.id} className="product-card" style={cardStyle}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>Цена: ${product.price}</p>
                            <button onClick={() => handleAdd(product)}>В корзину</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}