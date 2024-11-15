import About from "../../../assets/profile/about.png";

const MenuItem = ({title}: any) => {
  return (
    <div className={`inline-block w-[100px] h-full cursor-pointer group hover:border-b-2 border-b-green-500 transition-all duration-100 ease-in-out`}>
      <div className="w-full h-full flex items-center justify-center">
        <div className='h-[20px] overflow-hidden flex flex-col items-center'>
          <img width={20} height={20} src={About} alt="About" className={`group-hover:translate-y-[-20px] transition-all duration-300 ease-in-out`} />
          <p className='text-white font-bold text-[14px] group-hover:translate-y-[-20px] transition-all duration-300 ease-in-out'>About</p>
        </div>
      </div>
    </div>
  )
}

export default MenuItem;