
import {privacyData} from './data';
const PrivacyContent = () => {

  return (
    <div className="h-[600px] overflow-y-scroll w-full mt-2">
      {privacyData.map((data, index) => (
        <PrivacySection key={index} data={data} />
      ))}
    </div>
  );
}

interface props {
  data: any;
}
const PrivacySection = ({data}: props) => {
  return (
    <div className='mt-5'>
      <h5 className='font-inter text-[20px] leading-6'>{data.title}</h5>
      <div className='bg-[#FFFFFF99] rounded-lg divide-y'>
        <div className='mt-2 grid grid-cols-2 p-2 gap-2 font-inter font-[500] text-[11px] leading-4 '>
          <p>
            Violation
          </p>
          <p>
            Consequences
          </p>
        </div>
        {data.data.map((item: any, index: number) => (
          <div key={index} className='mt-2 grid grid-cols-2 py-6 p-2 gap-2 font-inter font-[500] text-[11px] leading-4 '>
            <p>
              {item.violation}
            </p>
            <p>
              {item.consequences}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrivacyContent;