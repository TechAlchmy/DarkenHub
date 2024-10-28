
import MenuIcon from "../../assets/globalchat/threedots.png";
import ChatLogo from "../../assets/globalchat/chatIcon.png";
import ChatCount from "../../assets/globalchat/chat_count.png";
import smile from "../../assets/globalchat/smile_emoj.png";

const GlobalChat = () => {

  return (
    <div className="w-full h-[340px] bg-global-chat p-5 relative z-10 bg-[#0D0D0D]">
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <div>
            <img src={ChatLogo} alt="" />
          </div>
          <p className="text-white text-border1 font-semibold text-[20px] leading-[26px] mt-2 font-crimson">Global Chat</p>
        </div>
        <div>
          <img src={MenuIcon} alt="" />
        </div>
      </div>

      <div className="flex gap-1 items-center">
        <div className="bg-[#FFFFFF1A] w-[180px] h-[1px]"></div>  
        <p className="text-[#FFFFFF66] text-[12px]">
          13:14
        </p>
        <div className="bg-[#FFFFFF1A] w-[180px] h-[1px]"></div>  
      </div>
      <div className="w-full h-[1px] bg-[#FFFFFF33] -mt-2"></div>
      <div className="h-[180px] py-5">
        <div className="flex gap-2">
          <div className="w-[30px] h-[30px]">
            <img src={ChatLogo} alt="" />
          </div>
          <div className="bg-[#FFFFFF33] p-[10px] rounded-md text-white">
            Let’s try a quick ALL PICK!!
          </div>
        </div>
      </div>

      <div className="relative">
        <input type="text" className="custom_input p-6 pr-[122px]! text-[16px] rounded border outline-none border-none" placeholder="Typing here" name="" />
        <div className="absolute right-3 top-0 flex gap-2 items-center">
            <div>
              <img src={ChatCount} className="w-10 h-10 mt-2" alt="" />
            </div>
            <div>
              <img src={smile} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalChat;