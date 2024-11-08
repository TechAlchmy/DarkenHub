
export const UserProfile = () => {

  return (
    <div>
      <div className="rounded-full w-[300px] h-[300px] p-[30px] border border-white/50">
        <div className="rounded-full p-[30px] border border-white/50 relative">
          <div className="bg-[#1D2333] rounded-full p-[20px]">

            <div className="relative">
              <div className="relative">

                <img
                  src={"../../src/assets/profile/Avatar Image.png"}
                  alt="profileBg"
                  className="w-full h-full border-radius-30px"
                />
              </div>

              <img
                src={"../../src/assets/profile/avatarName.png"}
                alt="profileBg"
                className=" border-radius-30px absolute bottom-0"
              />
              <img
                src={"../../src/assets/profile/Icon - Verification.png"}
                alt="profileBg"
                className=" border-radius-30px absolute top-2 left-2"
              />
              <div className=" absolute bottom-10 right-0">
                <img
                  src={"../../src/assets/profile/Hexagon.png"}
                  alt="profileBg"
                  className=" border-radius-30px"
                />
                <p className="text-white text-center absolute top-[7px] left-[6px]">24</p>
              </div>
            </div>
          </div>

          <div className="absolute left-[24px] top-[23px]">
            <div className="relative w-[188px]">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-transparent bg-transparent" stroke-width="1"></circle>
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-500" stroke-width="1" stroke-dasharray="100" stroke-dashoffset={100 - 100} stroke-linecap="round"></circle>
              </svg>

              <div className="absolute top-[25px] right-[10px]">
                <span className="bg-profile-process backdrop-blur-20 text-center text-[16px] font-inter text-white p-[5px] rounded-lg">26%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}