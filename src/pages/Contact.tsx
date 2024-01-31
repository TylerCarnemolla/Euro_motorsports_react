import Background from "../assets/images/desert_bg.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Build } from "@mui/icons-material";
const Contact = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`}} 
    className="flex flex-row justify-center mx-auto  bg-fixed bg-right"
    >
      <div className = 'flex place-items-center  bg-white bg-opacity-50 w-9/12  shadow-2xl '>
              <div className='flex flex-col mt-40 items-center' >
                  <h3 className='font-semibold font-serif mb-44 text-red-800 sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl'>Customer Support</h3> 
                  <div >
                    
                  

                      <p className='text-black text-3xl text-center m-20'>
                      At Euro Motorsports, we are dedicated to providing a seamless and enjoyable experience for our valued customers.
                       Our commitment extends to reliable shipping and handling guarantees. Expect timely and secure delivery of your orders,
                        ensuring that your prized motorcycle gear and accessories reach you in top condition.
                        <br />
                        <br />

                        With multiple locations, Euro Motorsports offers a range of services tailored to the needs of riders across Europe. Whether you're seeking
                        expert advice, maintenance services, or test rides, our knowledgeable staff at each location is here to assist you. Visit our stores for an 
                        immersive experience and discover the latest models from KTM, Husqvarna, BMW, Can-Am, Beta, and GasGas.
                        <br /><br />

                        Our customer-centric approach also reflects in our hassle-free return policies. If, for any reason, you are not completely satisfied with
                        your purchase, contact our customer service team for a prompt resolution. Your satisfaction is our priority, and we strive to make returns as simple and convenient as possible.

                        Interested in joining the Euro Motorsports team? We welcome passionate individuals who share our love for motorcycles. If you are a job 
                        seeker, please email your resume and cover letter to careers@euromotorsports.com. We're always on the lookout for talented individuals
                        to contribute to our success.
                        <br /><br />

                        Connect with Euro Motorsports today where customer satisfaction, quality services, and a passion for riding come together.

                        </p>
                  
                  
                  <div className="flex flex-col my-20 items-center border-4 p-3 border-yellow-500 bg-red-800 ">
                    <p className="text-6xl font-serif text-yellow-500">Need a repair?</p>
                    <p className="text-3xl text-white">Call our Shop to book an appointment or for questions and details. </p>
                    <p className="text-3xl text-white">1-(800)-555-5555</p>
                  </div>
                  
                 

                          <div className="flex justify-between border-4 p-3 my-20 border-yellow-500 bg-red-800">
                            <div className="flex flex-col text-center  text-white ">
                             
                              <div>
                                <p>LOW PRICE</p>
                                <p>GAURANTEE</p>
                                <p>if we cannot beat their price, <br /> we will match it.</p>
                              </div> 
                              <div className="">
                                <AttachMoneyIcon fontSize="large"/>
                              </div>

                            </div>

                            <div  className="flex flex-col  text-center text-white ">
                             
                              <div>
                              <p>Fast, Free</p>
                              <p>Shipping</p>
                              <p>Orders over $50 <br /> ship free.</p>
                              </div> 
                              <div>
                                <LocalShippingIcon fontSize="large"/>
                              </div>

                            </div>

                            <div  className="flex flex-col  text-center text-white ">
                              <div>
                                <p>5-STAR</p>
                                <p>SERVICE</p>
                                <p>Professionally trained <br />
                                  and certified mechanics <br />
                                  and engineers.</p>
                              </div>
                              <div>
                                <Build fontSize="large"/>

                              </div>

                            </div>

                            <div  className="flex flex-col  text-center text-white ">
                              <div>
                              <p>NO HASSLE</p>
                              <p>Returns</p>
                              <p>Return and unused <br />item within 90 days.</p>
                              </div>
                              <div>
                                <ProductionQuantityLimitsIcon fontSize="large"/>
                              </div>

                            </div>

                          </div>




                          <div className='flex justify-center my-20'>
                          <div className='flex flex-col w-1/4 rounded-lg bg-black bg-opacity-60 items-center'>
                            <div className='text-white flex flex-col items-center text-xl'>
                              <InstagramIcon style={{color:'white', fontSize:"50"}}/>
                              @Euro_Motorsports_CO
                            </div>
                            <div className='text-white flex flex-col items-center text-xl'>
                              <XIcon style={{color:'white', fontSize:"50"}}/>
                              @Euro_Motorsports_CO
                            </div>
                            <div className='text-white flex flex-col items-center text-xl'>
                              <FacebookIcon style={{color:'white', fontSize:"50"}}/>
                              @Euro Motorsports

                            </div>
                            <br />
                            <div className='text-white text-center text-xl'>
                              <p>1-(800)-555-5555 | Euromotorsports@net.net | 3232 NW Street ST, Colorado Springs CO</p>

                            </div>


                          </div>
                          </div>
                    </div>
              </div>

      </div>
      
      
  </div>
  )
}

export default Contact
