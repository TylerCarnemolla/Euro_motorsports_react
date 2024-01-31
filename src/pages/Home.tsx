import Background from '../assets/images/desert_bg.jpg'
import BikeCard from '../components/BikeCard';
import ATVCard from '../components/AtvCard';
import GearCard from '../components/GearCard';
import HelmetCard from '../components/card';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
      className='flex flex-row  justify-center mx-auto bg-cover bg-fixed'>
        
        <div className='flex flex-col   bg-white bg-opacity-50 w-9/12  shadow-2xl'>
        
           
            <div className='flex flex-col  items-center'>
              
              <h1 className=' font-semibold font-serif my-44 text-red-800 sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl'>EURO MOTORS</h1>

              <p className='font-semibold font-serif  text-red-800 text-2xl my-10'>Shop Our Remarkable Selections With The Security Of Our Price-Match Guarantee  </p>
              <div className='grid grid-cols-2 grid-rows-2 gap-36'>
                
                <Link to="./Helmets" className='bg-red-800 p-5 rounded-xl'>
                  <HelmetCard/>

                </Link>
               
                
                  <Link to="./Bikes" className='bg-red-800 p-5 rounded-xl'>
                  <BikeCard/>
                  </Link>

                
                <Link to="./Atvs" className='bg-red-800 p-5 rounded-xl'>
                  <ATVCard/>
                  </Link>

                
                <Link to="./Gear" className='bg-red-800 p-5 rounded-xl'>
                  <GearCard/>
                  </Link>

                
            </div>
            


              <div>
                <p className='text-black text-3xl text-center m-20'>Discover the thrill of European engineering 
                  and precision at Euro Motorsports, your premier 
                  destination for high-performance motorcycles.
                   Immerse yourself in the world of two-wheel adventure
                    with top-notch brands such as KTM, Husqvarna, GasGas,
                     Can-Am, and Beta. From cutting-edge bikes to quality 
                     gear and helmets, we offer a comprehensive selection to 
                     elevate your riding experience. Explore our showroom for
                      ATV's and quads from the same esteemed manufacturers,
                       ensuring excellence in every aspect of your off-road journey. 
                       Embrace the ride of a lifetime with Euro Motorsports – where passion
                        meets performance.</p>
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

                
              </div>

            </div>
            

          
        </div>
       
    </div>
    

  )
}

export default Home
