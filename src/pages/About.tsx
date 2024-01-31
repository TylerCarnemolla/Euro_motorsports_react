
import Background from '../assets/images/desert_bg.jpg'
import NewsCard1 from '../components/news_card'
import NewsCard2 from '../components/news_card2'
import NewsCard3 from '../components/news_card3'



const About = () => {
  return (
<div style={{backgroundImage: `url(${Background})`}} 
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed bg-right"
    >
      <div className = 'flex place-items-center   bg-white bg-opacity-50 w-9/12  shadow-2xl'>
              <div className='flex flex-col items-center' >
                  <h3 className='font-semibold font-serif mb-44 mt-40 text-red-800 sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl'>About Us</h3> 
                  
                  <div>

                    <p className='text-black text-xl text-center m-20'>
                        
                          Welcome to Euro Motorsports, your premier destination for all things motorcycle-related in Europe. With a rich legacy
                          spanning over 40 years, Euro Motorsports is the trusted hub for riders seeking top-quality gear, tires, and parts for their KTM,
                            Husqvarna, BMW, Can-Am, Beta, and GasGas motorcycles. Our commitment to providing a secure, hassle-free shopping experience,
                            coupled with FREE shipping options and outstanding customer service, sets us apart as your go-to European motorcycle parts store.

                          Whether you're passionate about street bikes, dirt bikes, ATVs, or scooters, Euro Motorsports has you covered. Explore our 160,000
                          square foot dealership showcasing the latest models and vibrant color options from renowned manufacturers such as KTM, Husqvarna,
                            BMW, Can-Am, Beta, and GasGas.
                            <br />
                            <br />

                          Our knowledgeable customer service representatives are available to assist you, ensuring that you find the perfect motorcycle part
                          or accessory for your European ride. If you're uncertain about your needs, feel free to reach out to us toll-free at 1-800-555-euro.

                          Euro Motorsports proudly offers a diverse selection of motorcycle gear, including helmets, jackets, boots, and more, all designed
                          to meet the highest standards of style and safety. Take advantage of our easy return policy and Lowest Price Guarantee for a confident shopping experience.

                          Embrace the flexibility to buy or finance a new or used KTM, Husqvarna, BMW, Can-Am, Beta, or GasGas motorcycle with Euro Motorsports.
                          As an authorized dealer for these top European brands, we provide an extensive range of options to suit every rider's preferences.

                          Experience the convenience of our user-friendly search options, designed to simplify the process of finding the exact items you desire.
                          <br />
                          <br />
                          Plus, enjoy FREE shipping on motorcycle gear and parts, enhancing the overall value of your purchases.

                          At Euro Motorsports, we value your loyalty. That's why we offer the Euro Moto Cash Program, allowing you to earn rewards while indulging 
                          in the finest motorcycle essentials. Choose Euro Motorsports as your trusted European motorcycle shop, where quality, variety, and exceptional
                          service converge to elevate your riding experience.
                        </p>
                          
                          
                          
                          <div className='flex p-10 justify-between'>
                            <div className='m-3'>
                              <NewsCard1/>
                            </div>
                            <div className='m-3'>
                              <NewsCard2/>
                            </div>
                            <div className='m-3'>
                              <NewsCard3/>
                              </div>
                          </div>



                          <div className='flex flex-col items-center'>
                            <p className='font-semibold font-serif  text-red-800 text-5xl mt-20'>Meet the Owner</p>

                            <div className='bg-red-800 p-3 rounded flex items-center mt-10 mb-20'>
                              
                              <p className='text-white text-center text-xl p-5'>Euro Motorsports was founded by Richard Ryan in 2015. Richard was born and raised in Colorado Springs and 
                                began racing amature motorcross at the age 17. After a career ending injury Richard set out to make an
                                impression on his community by startign Euro Motorsports. His dream was to provide a place for gear-heads like him to 
                                shop and hang-out while sharing their latest racing or adventure stories. Richard made it his ambition to 
                                spread the joy of riding with his community. He lead the charge preasuring the Colorado Springs Board of Directors to 
                                allow the construction of a professional-grade motorcross track 2 miles outside of town. He was successful and is now 
                                the owner/operator of the RedBull Energy Motorcross track on Mission Dr. Once open, it will have tracks open to riders of 
                                all ages and skill levels. 


                              </p>
                            </div>
                            <p className='font-semibold font-serif  text-red-800 text-5xl mt-20'>Get Social</p>
                            <div className='bg-red-800 p-3 rounded flex items-center my-20'>
                              
                              <p className='text-white text-center text-xl p-5'>
                              Euro Motorsports has successfully cultivated a thriving social media platform 
                              that serves as a vibrant hub connecting riders of all types and fostering a strong
                               community spirit. This platform not only showcases the latest gear and motorcross 
                               trends but also encourages enthusiasts to share their riding experiences, tips, and
                                stories. Through this digital space, riders of all ages and skill levels come together 
                                to celebrate their passion for motorcross. Euro Motorsports has taken the initiative
                                 to organize community rides, providing an opportunity for members to connect in person.
                                  These rides, suitable for riders of varying expertise and family-friendly, offer
                                   a chance for participants to bond over their shared love for riding.
                                    To be a part of these exciting experiences, we invite you to seek out
                                     your local Euro Motorsports chapter and discover the thrilling rides
                                     and community events awaiting you. Join the movement and explore the 
                                     world of motorcross with fellow enthusiasts!
                              </p>
                              
                            </div>
                            <p className='font-semibold font-serif  text-red-800 text-5xl mt-20'>Share With Us</p>
                            <div  className='bg-red-800 p-3 rounded flex items-center my-20'>
                             
                              <p className='text-white text-center text-xl p-5'>
                                We would love to hear from you! Share your adventures and stories with us on
                                 our social media! We would love to see where the bikes 
                                you buy from us take you! It brings us absolute joy to know The bikes we sell 
                                and fix take our customers from one memory to another.
                              </p>
                            </div>

                          </div>

                    </div>
              </div>
              

      </div>
      
      
  </div>
  )
}

export default About
