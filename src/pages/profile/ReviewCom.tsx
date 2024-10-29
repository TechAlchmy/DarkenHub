import { useMemo } from "react"

import Star from "../../assets/profile/star.png";
import Avarta from "../../assets/profile/Avatar Image.png"

const ReviewCom = () => {

  const reviews = useMemo(() => {
    return [
      {
        service: "Dota 2",
        avarta: "",
        price: "12",
        date: "APRIL 21, 2023",
        star: 4,
        desc: "This is a customer review"
      },
      {
        service: "Dota 2",
        avarta: "",
        price: "12",
        date: "APRIL 21, 2023",
        star: 4,
        desc: "This is a customer review",
        seller: {
          name: "Alexim",
          content: "Thanks for your feedback",
          img: ""
        }
      }
    ]
  }, []);

  return (
    <div
      className="
        flex
        flex-col
        gap-5
        rounded-t-[32px]
      "
    >
      {reviews.map((review) => (
        <ReviewItem review={review} />
      ))}

    </div>
  )
}

interface props {
  review: any
}
const ReviewItem = ({review} : props) => {

  return (
    <div
      className="
        py-10
        px-5
        border_review
        rounded-[32px]
        bg-review
        flex
        gap-[56px]
      "
    >
      <div
        className="
          w-[66px]
          h-[64px]
          bg-[#3D9BB7]
          rounded-[14px]
        "
      >

      </div>
      <div
        className="
          flex
          flex-col
          gap-5
          w-[420px]
        "
      >
        <p className="font-inter font-[600] text-[20px] leading-[30px] text-white">{review.service}</p>
        <div>
          <p className="font-inter font-bold text-15px leading-4 text-[#2F85DA]">/Name of Service <span className="text-[#FFFFFF99]">{review.price}$ - {review.date}</span></p>
          <div
            className="flex"
          >
            {Array.from({length: review.star}).map((_, index) => (
              <div
                className="w-6 h-6 mt-2"
              >
                <img src={Star} alt="" />
              </div>
            ))}
          </div>
        </div>
        <p
          className="
            font-inter
            text-[15px]
            leading-6
            text-[#FFFFFFB2]
          "
        >
          {review.desc}
        </p>
        {review?.seller && (
          <div
            className="
              p-8
              bg-review-seller
              rounded-t-xl
            " 
          >
            <p
              className="
                text-white
                font-inter
                font-[500]
                text-[18px]
              "
            >
              Seller's response
            </p>
            <p
              className="
                text-[#FFFFFF99]
                leading-5
                font-[500]
                font-inter
                text-[14px]
              "
            >
              {review?.seller.content}
            </p>
            <div
              className="
                flex
                gap-2
                mt-5
                items-center
              "
            >
              <div
                className="
                  w-11
                  h-11
                "
              >
                <img src={Avarta} alt="" />
              </div>
              <p 
                className="
                  text-white
                  leading-5
                  font-[500]
                  font-inter
                  text-[14px]
                "
              >
                {review.seller.name}

              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewCom;