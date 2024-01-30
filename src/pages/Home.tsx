import Background from '../assets/images/desert_bg.jpg'
import QuiltedImageList from '../components/Image_list'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import HelmetCard from '../components/card.tsx';
import BikeCard from '../components/BikeCard.tsx';
import ATVCard from '../components/AtvCard.tsx';
import GearCard from '../components/GearCard.tsx';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        
        <div className='flex flex-col   bg-white bg-opacity-50 w-9/12  shadow-2xl'>
        
           
            <div className='flex flex-col  items-center'>
              <div className='grid mb-24 grid-row-1 grid-cols-5 gap-20'>
                <img src="../src/assets/images/Beta_logo.jpg" alt="beta logo"  />
                <img src="../src/assets/images/Can_am_logo.png" alt="can am logo" />
                <img src="../src/assets/images/Gasgas.png" alt="Gas Gas logo" />
                <img src="../src/assets/images/husk_logo.jpeg" alt="husqvarna logo" />
                <img src="../src/assets/images/KTM_logo.png" alt="" />
              </div>
              <h1 className=' font-semibold font-serif mb-44 text-red-800 sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl'>EURO MOTORS</h1>

              
              
              <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                
                  <Link to="./Helmets">
                    <HelmetCard/>

                  </Link>
                 
                  
                    <Link to="./Bikes">
                    <BikeCard/>
                    </Link>

                  
                  <Link to="./Atvs">
                    <ATVCard/>
                    </Link>

                  
                  <Link to="./Gear">
                    <GearCard/>
                    </Link>

                  
              </div>
              
              <div className='flex flex-col text-center  text-yellow-400 bg-red-800 p-5 rounded-3xl my-44'>
                <p className='font-semibold font-serif'>Follow Along With Our Pros, Fans, and Sponsors on Social Media</p>
                <p className='font-semibold font-serif'>Share Your Adventures With us and our Amazing Euro Motorsports Community</p>
                  <div className='flex mt-4 justify-around text-yellow-400'>
                      <div>
                      <InstagramIcon/> @EuroMotorsports
                      </div>
                      <div>
                      <XIcon/> @EuroMotorsports
                      </div>
                      <div>
                      <FacebookIcon/>Euro MotorSports
                      </div>
                  </div>

                <div className=''>
                  <QuiltedImageList/>
                 
                </div>
              </div>

            </div>
            

          
        </div>
       






















    </div>
    

  )
}

export default Home
