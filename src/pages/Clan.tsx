import { useState } from "react";

import clanBg from "../../src/assets/profile/profileBg.jpg"
import clanAvatar from "../../src/assets/profile/Avatar Image.png"

type Tab = 'Tab1' | 'Tab2' | 'Tab3';
const Clan = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Tab1');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="px-[20px]">
      <div className="w-full">
        <img
          src={clanBg}
          alt="profileBg"
          className="w-full h-full rounded-[35px] -z-10 bg-black opacity-50"
        />
        <div className="relative flex justify-between items-center mt-[-130px]">
          <div className="flex items-center pl-[50px]">
            <img
              src={clanAvatar}
              alt=""
              className="size-[150px] rounded-full border-[5px] border-black"
            />
            <div className="pl-[15px] text-white font-bold">
              <p className="text-[20px] uppercase">team xr</p>
              <div className="flex justify-between min-w-[150px]">
                <p>
                  <img src={""} alt="" />
                  {3}players
                </p>
                <p>
                  <img src={""} alt="" />
                  English
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pr-[50px]">
            <div className="relative z-10">
              <img src={clanAvatar} alt="members" className="size-[40px] rounded-full border-[2px] border-black" />
            </div>
            <div className="relative z-20 translate-x-[-15px]">
              <img src={clanAvatar} alt="members" className="size-[40px] rounded-full border-[2px] border-black" />
            </div>
            <div className="relative z-30 translate-x-[-30px]">
              <img src={clanAvatar} alt="members" className="size-[40px] rounded-full border-[2px] border-black" />
            </div>
            <div className="relative z-40 translate-x-[-45px]">
              <img src={clanAvatar} alt="members" className="size-[40px] rounded-full border-[2px] border-black" />
            </div>
            <div className="relative z-40 translate-x-[-60px] size-[40px] flex items-center justify-center bg-slate-700 rounded-full border-[2px] border-black">
              <p className="text-white text-[12px]">55+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around mt-[50px]">
        <div className="flex items-center justify-center">
          <img src={``} alt="" />
          <div>
            <p className="text-[30px] font-bold text-white">${0}</p>
            <p className="text-[20px] font-medium text-slate-400">Money Earned</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={``} alt="" />
          <div>
            <p className="text-[30px] font-bold text-white">{0}</p>
            <p className="text-[20px] font-medium text-slate-400">Item Sell</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={``} alt="" />
          <div>
            <p className="text-[30px] font-bold text-white">{0}</p>
            <p className="text-[20px] font-medium text-slate-400">Complete</p>
          </div>
        </div>
      </div>
      <div className="text-white w-full mt-[50px] px-[50px]">
        <div className="flex gap-36 mb-5" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button className="hover:text-green-500 hover:border-b-2 hover:border-green-500" onClick={() => handleTabClick('Tab1')}>All</button>
          <button className="hover:text-green-500 hover:border-b-2 hover:border-green-500" onClick={() => handleTabClick('Tab2')}>Active</button>
          <button className="hover:text-green-500 hover:border-b-2 hover:border-green-500" onClick={() => handleTabClick('Tab3')}>Complete</button>
        </div>

        <div>
          {activeTab === 'Tab1' && <div>Content for Tab 1</div>}
          {activeTab === 'Tab2' && <div>Content for Tab 2</div>}
          {activeTab === 'Tab3' && <div>Content for Tab 3</div>}
        </div>
    </div>
    </div>
  )
}

export default Clan;