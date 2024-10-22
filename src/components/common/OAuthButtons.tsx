import { useGoogleLogin } from "@react-oauth/google";
import { FaSteam, FaApple, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OAuthButtons = () => {

  const navigate = useNavigate();

  const onGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse:any) => {
      console.log(tokenResponse);
      try {
        console.log(tokenResponse.access_token);
        
        // Send the ID token to your backend
        const backendResponse = await fetch(`${import.meta.env.VITE_APP_LOCAL_URL}/auth/google`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        });

        const data = await backendResponse.json();
        if (data.success) {
          localStorage.setItem('authToken', data.token);
          navigate("/user/dashboard");
        } else {
          console.error('Authentication failed');
        }
      } catch (error: any) {
        console.error('Error during authentication:', error);
      }
    },
    onError: () => {
      console.error('Google login failed');
    }
  })

  return (
    <div className="grid grid-cols-3 gap-4 mx-auto justify-center max-w-[300px] my-5">
      <button className="oauth-provider-box w-[75px] h-[75px] flex items-center justify-center text-white text-[35px]">
        <FaSteam />
      </button>
      <button className="oauth-provider-box w-[75px] h-[75px] flex items-center justify-center text-white text-[35px]">
        <FaApple />
      </button>
      <button 
        className="oauth-provider-box w-[75px] h-[75px] flex items-center justify-center text-white text-[35px]"
        onClick={() => onGoogleLogin()}
      >
        <FaGoogle />
      </button>
    </div>
  );
};

export default OAuthButtons;
