import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import instagramIcon from '../images/icon-instagram.svg';

export const Footer = () => {
  return (
    <div className="text-White bg-VeryDarkBlue text-center flex flex-col gap-4 py-10 md:flex-row md:gap-20 md:justify-center">

      {/* Footer Logo */}

      <h3 className='text-3xl font-extrabold'>Shortly</h3>

      {/* Footer Item Features */}

      <div>
        <h4 className='font-extrabold my-6 md:my-0'>Features</h4>

        <ul className='flex flex-col gap-3'>
          <li className="hover:text-Cyan cursor-pointer">Link Shortening</li>
          <li className="hover:text-Cyan cursor-pointer">Branded Links</li>
          <li className="hover:text-Cyan cursor-pointer">Analytics</li>
        </ul>

      </div>


      {/* Footer Item Resources */}


      <div>
        <h4 className='font-extrabold my-6 md:my-0'>Resources</h4>

        <ul className='flex flex-col gap-3'>
          <li className="hover:text-Cyan cursor-pointer">Blog</li>
          <li className="hover:text-Cyan cursor-pointer">Developers</li>
          <li className="hover:text-Cyan cursor-pointer">Support</li>
        </ul>

      </div>


      {/* Footer Item Company */}


      <div>
        <h4 className='font-extrabold my-6 md:my-0'>Company</h4>

        <ul className='flex flex-col gap-3'>
          <li className="hover:text-Cyan cursor-pointer">About</li>
          <li className="hover:text-Cyan cursor-pointer">Our Team</li>
          <li className="hover:text-Cyan cursor-pointer">Careers</li>
          <li className="hover:text-Cyan cursor-pointer">Contact</li>
        </ul>

      </div>


      {/* Social Icons */}

      <div className="flex justify-center gap-8">
        <img src={facebookIcon} alt="icon-facebook.svg" className='cursor-pointer md:w-5 md:h-5' />
        <img src={twitterIcon} alt="icon-facebook.svg" className='cursor-pointer md:w-5 md:h-5' />
        <img src={pinterestIcon} alt="icon-facebook.svg" className='cursor-pointer md:w-5 md:h-5' />
        <img src={instagramIcon} alt="icon-facebook.svg" className='cursor-pointer md:w-5 md:h-5' />


      </div>



    </div>
  )
}
