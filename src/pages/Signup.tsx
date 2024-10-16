import { Link } from "react-router-dom";
import Input from "../components/common/Input";
import OAuthButtons from "../components/common/OAuthButtons";

function Signup() {
  return (
    <>
      <div className="text-center">
        <h4 className="text-center font-bold text-lg text-white font-jakarta">
          Register with
        </h4>
        <OAuthButtons />
        <h4 className="text-center text-[#A0AEC0] font-bold font-jakarta text-lg">
          or
        </h4>
      </div>
      <Input label="Name" id="name" placeholder="Your full name" />
      <Input label="Email" id="email" placeholder="Your email address" />
      <Input label="Password" id="password" placeholder="your password" />
      <button className="text-white font-bold mt-10 font-jakarta text-xs w-full rounded-xl bg-[#0075FF] flex items-center justify-center h-[45px]">
        SIGN UP
      </button>
      <div className="flex items-center justify-center font-jakarta gap-2 mt-4">
        <p className="text-[#A0AEC0]">Already have an account?</p>
        <Link to="/signin" className="font-bold text-white">
          Sign in
        </Link>
      </div>
    </>
  );
}

export default Signup;
