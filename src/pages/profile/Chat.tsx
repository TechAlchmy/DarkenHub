import UserIcon from "../../assets/profile/chatIcon.png";
import ThreeDot from "../../assets/profile/threedots.png";
import HomeIcon from '../../assets/profile/home.png';
import ThreeLine from '../../assets/profile/three_line.png';
import Notification from '../../assets/profile/Icon - Notification.png';
import ChatCount from '../../assets/profile/chat_count.png';
import smile from '../../assets/profile/smile_emoj.png';
import Bg from '../../assets/profile/bg2.png';

const Chat = () => {

  return (
    <div className="relative">
      <div
        className="
          absolute
          left-0
          top-0
        "
      >
        <img src={Bg} alt="" />
      </div>
      <div
        className="
        mt-5
        rounded-[30px]
        backdrop-blur-40
        bg-profile_chat
        h-[674px]
        p-5
        "
      >
        <div
          className="
            flex 
            justify-between
            items-center
          "
        >
          <div
            className="
              flex
              gap-[10px]
            "
          >
            <div
              className="
                w-[60px]
                h-[60px]
                rounded-full
              "
            >
              <img src={UserIcon} alt="" />
            </div>
            <p
              className="
                font-crimson
                font-[600]
                text-[20px]
                leading-[26px]
                text-white
                mt-2
              "
            >
              Alexim
            </p>
          </div>

          <div
            className="
              flex
              gap-2
              p-[10px]
            "
          >
            <div
              className="
                flex
                relative
                z-10
              "
            >
              <div
                className="w-4 h-4"
              >
                <img src={Notification} className="relative z-40" alt="" />
              </div>
              <div
                className="
                  h-5
                "
              >
                <img src={HomeIcon} alt="" />
              </div>
              <div
                className="
                  h-5
                "
              >
                <img src={ThreeLine} alt="" />
              </div>
            </div>
            <div
              className="
                w-[20px]
                h-[20px]
              "
            >
              <img src={ThreeDot} alt="" />
            </div>
          </div>
        </div>
        <div
          className="
            mt-[22px]
            h-[1px]
            bg-[#FFFFFF33]
          "
        >
        </div>
        <div
          className="
            h-[448px]
            mt-5
          "
        >

        </div>
        <div className="relative mt-5">
          <input 
            type="text" 
            className="custom_input p-6 pr-[122px]! text-[16px] rounded border outline-none border-none" 
            placeholder="Typing here" 
            name="" 
            // value={newMessage} 
            // onChange={(e) => setNewMessage(e.target.value)}
            // onKeyDown={handleKeyDown}
          />
          <div className="absolute right-3 top-0 flex gap-2 items-center custom">
              <div>
                <img src={ChatCount} className="w-10 h-10 mt-2" alt="" />
              </div>
              <div>
                <img src={smile} className="mt-2" alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;