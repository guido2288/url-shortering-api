import hero from '../images/illustration-working.svg';


export const Hero = () => {
  return (
    <div className='md:flex md:gap-12 mb-8'>

      {/* Hero img */}
      <img src={hero} alt="illustration-working.svg" className='md:w-1/2 md:order-2' />

      <div className='text-center py-3 md:my-auto md:order-1'>
        <h2 className='text-4xl font-extrabold text-VeryDarkBlue py-2 md:text-5xl'>More than just shorter links</h2>
        <p className='text-GrayishViolet py-2 mb-4 md:text-xl'>Build your brand’s recognition and get detailed insights
          on how your links are performing.</p>
        <button className='rounded-full px-6 py-3 bg-Cyan hover:bg-CyanLigth text-White font-bold'>Get Started</button>

      </div>

    </div>
  )
}
