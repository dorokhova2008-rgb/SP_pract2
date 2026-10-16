import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        alert('Вы вошли!');
        navigate('/dashboard');
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Страница входа</h2>
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
}