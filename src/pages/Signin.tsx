import { Switch } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import OAuthButtons from "../components/common/OAuthButtons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/auth";

function Signin() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authenticated = useSelector((state: any) => state.auth.authenticated);

  useEffect(() => {
    if (localStorage.getItem("authToken"))
      navigate("/user/dashboard");
  }, [])

  const onSignIn = () => {
    let data: any = {email, password};
    dispatch(signIn(data));
    if (authenticated)
      navigate("/user/dashboard");
  }

  return (
    <>
      <div className="text-center">
        <h4 className="text-center font-bold text-lg text-white font-jakarta">
          Login with
        </h4>
        <OAuthButtons />
        <h4 className="text-center text-[#A0AEC0] font-bold font-jakarta text-lg">
          or
        </h4>
      </div>
      <Input
        label="Email" 
        id="email" 
        placeholder="Your email address" 
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <Input 
        label="Password" 
        id="password" 
        placeholder="your password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />
      <div className="mb-5 flex text-white text-xs font-jakarta font-normal items-center gap-4">
        <Switch defaultChecked={true} />
        <span>Remember me</span>
      </div>
      <button 
        className="text-white font-bold mt-10 font-jakarta text-xs w-full rounded-xl bg-[#0075FF] flex items-center justify-center h-[45px]"
        onClick={onSignIn}
      >
        Sign IN
      </button>
      <div className="flex items-center justify-center font-jakarta gap-2 mt-4">
        <p className="text-[#A0AEC0]">Don't have an account?</p>
        <Link to="/signup" className="font-bold text-white">
          Sign up
        </Link>
      </div>
    </>
  );
}

export default Signin;
