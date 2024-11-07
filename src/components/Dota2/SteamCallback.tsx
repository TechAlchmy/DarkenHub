import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loadingspinner from '../../assets/lazy_loading.gif'
import './steamCallBack.css'

const SteamCallback = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const identity = params.get('openid.claimed_id');

        if (identity) {
            const userData = {
                steamId: identity.split('/').pop(), // Extract Steam ID from URL
                // You can add more user info if needed
            };

            // Send user data to backend
            fetch('http://localhost:5500/auth/steam/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            .then(response => response.json())
            .then(data => {
              if(data.success === true) {
                localStorage.setItem('authToken', data.token);
                navigate('/user/dashboard');
              }else {
                navigate('/signin');
              }
            })
            .catch(error => console.error('Error:', error));
        }
    }, []);

    return <div className={`w-full h-screen flex justify-center items-center bg-loading bg-cover`}>
      <img src={`${loadingspinner}`} className='w-[100px] h-[100px]' alt="loadingSpinner" />
    </div>;
};

export default SteamCallback;