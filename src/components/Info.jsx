import brand from '../images/icon-brand-recognition.svg';
import record from '../images/icon-detailed-records.svg';
import customizable from '../images/icon-fully-customizable.svg';


export const Info = () => {
  return (
    <div>
      <div className="text-center my-8">
        <h3 className="text-3xl font-extrabold text-VeryDarkBlue py-4">Advanced Statistics</h3>
        <p className="text-GrayishViolet">Track how your links are performing across the web with our
          advanced statistics dashboard.</p>
      </div>

      {/* Cards container */}
      <div className="flex flex-col gap-20 my-16 md:flex-row">

        {/* Card Brand 01 */}

        <div className='bg-GrayLight px-4 py-8 relative rounded-md md:h-1/2'>
          <div className='bg-DarkViolet rounded-full p-4 w-16 absolute mx-auto left-0 right-0 -top-8 md:mx-0 md:left-6'>
            <img src={brand} alt="icon-brand-recognition.svg" />
          </div>
          <h4 className='text-center text-xl font-extrabold text-VeryDarkBlue my-2'>Brand Recognition</h4>
          <p className='text-center text-GrayishViolet'>Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.</p>
        </div>

        {/* Card Record 02 */}


        <div className='bg-GrayLight px-4 py-8 relative rounded-md md:my-10 md:h-1/2'>
          <div className='bg-Cyan w-2 h-20 absolute mx-auto left-0 right-0 -top-20 md:-left-full md:right-20 md:top-1/2 md:h-2 md:w-20'></div>
          <div className='bg-DarkViolet rounded-full p-4 w-16 absolute mx-auto left-0 right-0 -top-8 md:mx-0 md:left-6'>
            <img src={record} alt="icon-detailed-records.svg" />
          </div>
          <h4 className='text-center text-xl font-extrabold text-VeryDarkBlue my-2'>Detailed Records</h4>
          <p className='text-center text-GrayishViolet'>Gain insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.</p>
        </div>

        {/* Card Customizable 03 */}

        <div className='bg-GrayLight px-4 py-8 relative rounded-md md:my-20'>
          <div className='bg-Cyan w-2 h-20 absolute mx-auto left-0 right-0 -top-20 md:-left-full md:right-20 md:top-12 md:h-2 md:w-20'></div>
          <div className='bg-DarkViolet rounded-full p-4 w-16 absolute mx-auto left-0 right-0 -top-8 md:mx-0 md:left-6'>
            <img src={customizable} alt="icon-fully-customizable.svg" />
          </div>
          <h4 className='text-center text-xl font-extrabold text-VeryDarkBlue my-2'>Fully Customizable</h4>
          <p className='text-center text-GrayishViolet'>Improve brand awareness and content discoverability through customizable
            links, supercharging audience engagement.</p>
        </div>


      </div>



    </div>
  )
}
