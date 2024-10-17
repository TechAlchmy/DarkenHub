import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

const Input = ({ label, id, ...rest }: IProps) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="text-white font-bold text-sm font-jakarta mb-1 block pl-3"
      >
        {label}
      </label>
      {
        label == "Password" ? 
        <input
          type="password"
          {...rest}
          className="flex w-full input-shadow px-4 h-[50px] focus:outline-none text-[#A0AEC0] font-jakarta text-sm font-normal rounded-2xl"
        /> :
        <input
          {...rest}
          className="flex w-full input-shadow px-4 h-[50px] focus:outline-none text-[#A0AEC0] font-jakarta text-sm font-normal rounded-2xl"
        />
      }
      
    </div>
  );
};

export default Input;
