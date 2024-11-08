import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Input from "../components/common/Input";
import OAuthButtons from "../components/common/OAuthButtons";
import { signUp } from "../store/auth";

function Signup() {
  
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignUp = () => {
    let data = { fullname: name, email: email, password: password };
    dispatch(signUp(data));
  }
  return (
    <>
      <motion.div>
        <div className="text-center">
          <h4 className="text-center font-bold text-lg text-white font-jakarta">
            Register with
          </h4>
          <OAuthButtons />
          <h4 className="text-center text-[#A0AEC0] font-bold font-jakarta text-lg">
            or
          </h4>
        </div>
        <Input 
          label="Name" 
          id="name" 
          placeholder="Your full name" 
          value={name}
          onChange={(e:any) => setName(e.target.value)}
        />
        <Input 
          label="Email" 
          id="email" 
          placeholder="Your email address" 
          value={email}
          onChange={(e:any) => setEmail(e.target.value)}
        />
        <Input 
          label="Password" 
          id="password" 
          placeholder="your password" 
          value={password}
          onChange={(e:any) => setPassword(e.target.value)}
        />
        <button className="text-white font-bold mt-10 font-jakarta text-xs w-full rounded-xl bg-[#0075FF] flex items-center justify-center h-[45px]"
          onClick={onSignUp}
        >
          SIGN UP
        </button>
        <div className="flex items-center justify-center font-jakarta gap-2 mt-4">
          <p className="text-[#A0AEC0]">Already have an account?</p>
          <Link to="/signin" className="font-bold text-white">
            Sign in
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default Signup;
