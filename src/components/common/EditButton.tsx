import RightArrow from "../../assets/profile/Arrow Right.png";

const EditButton = () => {

  return (
    <button
      className="
        border
        border-[#FFFFFF99]
        rounded
        text-[#FFFFFF99]
        font-inter
        text-[13px]
        leading-5
        w-[85px]
        h-9
        flex
        items-center
        justify-center
      "
    >
      <div className="gap-4 flex items-center">
        Edit
        <div className="w-4 h-4">
          <img src={RightArrow} alt="" />
        </div>
      </div>
    </button>
  )
}

export default EditButton;