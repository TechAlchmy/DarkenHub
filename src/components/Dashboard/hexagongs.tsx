import { useMemo } from "react";
import Hexagon from "./hexagon";
import BG1 from '../../assets/dashboard/hexagons/1.png'
import BG2 from '../../assets/dashboard/hexagons/2.png'
import BG3 from '../../assets/dashboard/hexagons/3.png'
import BG4 from '../../assets/dashboard/hexagons/4.png'
import BG5 from '../../assets/dashboard/hexagons/5.png'
import BG6 from '../../assets/dashboard/hexagons/6.png'
import BG7 from '../../assets/dashboard/hexagons/7.png'
import BG8 from '../../assets/dashboard/hexagons/8.png'
import BG9 from '../../assets/dashboard/hexagons/9.png'
import BG10 from '../../assets/dashboard/hexagons/11.png'
import BG11 from '../../assets/dashboard/hexagons/12.png'


const Hexagons = () => {
  const data = useMemo(() => {
    return [
      {
        items: [BG1, BG2]
      },
      {
        items: [BG3, BG4, BG5]
      },
      {
        items: [BG6, BG7, BG8, BG9]
      },
      {
        items: ['', BG10, BG11]

      },
    ]
  }, []);
  return (
    <div className="flex items-center  -mt-40 relative -z-1">
      {
        data.map((tmp) => (
          <div className="gap-5 flex flex-col">
            {tmp.items.map((txt) => (
              <Hexagon image={txt} />
            ))}
          </div>
        ))
      }
    </div>
  );
}

export default Hexagons;