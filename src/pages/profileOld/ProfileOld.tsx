import { useState } from "react";
import BuyerCom from "./BuyerCom";

const ProfileOld = () => {
  const [index] = useState(1);

  const render = () => {

    switch (index) {
      case 0:
        return <BuyerCom />
      case 1:
        return <BuyerCom owner />
    }
  }
  return (
    render()
  );
}

export default ProfileOld;