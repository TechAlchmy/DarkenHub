import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './steamCallBack.css';

const SteamCallback = () => {
    const navigate = useNavigate();
    const isFirst = useRef(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const identity = params.get('openid.claimed_id');
        
        if (identity && !isFirst.current) {
            isFirst.current = true;
            const userData = {
                steamId: identity.split('/').pop(), // Extract Steam ID from URL
                // You can add more user info if needed
            };

            // Send user data to backend
            fetch(`${import.meta.env.VITE_APP_LOCAL_URL}/auth/steam/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success === true) {
                    localStorage.setItem('authToken', data.token);
                    navigate('/user/dashboard');
                } else {
                    navigate('/signin');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                navigate('/signin'); // Optionally navigate on error
            });
        }
    }, []); // Add hasFetched as a dependency

    return (
        <div className={`w-full h-screen flex justify-center items-center bg-loading bg-cover`}>
            <p className="loader"></p>
        </div>
    );
};

export default SteamCallback;