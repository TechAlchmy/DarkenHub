import { useGoogleLogin } from "@react-oauth/google";
import { FaSteam, FaApple, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OAuthButtons = () => {

  const navigate = useNavigate();

  const onGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse:any) => {
      try {
        
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

  const onSteamLogin = () => {
    const steamOpenIDUrl = 'https://steamcommunity.com/openid/login';
    const redirectUrl = ('http://localhost:5173/steamcallback'); // Update this as needed
    const realm = ('http://localhost:5173/'); // Update this to match your application's URL
    
    const params = new URLSearchParams({
        'openid.ns': 'http://specs.openid.net/auth/2.0',
        'openid.mode': 'checkid_setup',
        'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.realm': realm, // Ensure this is set correctly
        'openid.return_to': redirectUrl,
        'openid.ns.sreg': 'http://openid.net/extensions/sreg/1.1',
        'openid.sreg.optional': 'nickname,email,fullname,dob,gender,postcode,country,language,timezone',
        'openid.ns.ax': 'http://openid.net/srv/ax/1.0',
        'openid.ax.mode': 'fetch_request',
        'openid.ax.type.fullname': 'http://axschema.org/namePerson',
        'openid.ax.type.firstname': 'http://axschema.org/namePerson/first',
        'openid.ax.type.lastname': 'http://axschema.org/namePerson/last',
        'openid.ax.type.email': 'http://axschema.org/contact/email',
        'openid.ax.required': 'fullname,firstname,lastname,email',
    });
    
    // Combine the base URL with the parameters
    const openIDLoginUrl = `${steamOpenIDUrl}?${params.toString()}`;
  
    console.log(`${steamOpenIDUrl}?${params.toString()}`);
  
    //window.location.href = `${steamOpenIDUrl}?${params.toString()}`;
    window.location.href = openIDLoginUrl
  }

  return (
    <div className="grid grid-cols-3 gap-4 mx-auto justify-center max-w-[300px] my-5">
      <button 
        className="oauth-provider-box w-[75px] h-[75px] flex items-center justify-center text-white text-[35px]"
        onClick={() => onSteamLogin()}
      >
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