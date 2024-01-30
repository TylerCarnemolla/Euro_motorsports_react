import React from 'react'
import HelmetGrid from '../components/HelmetTable'
import Background from '../assets/images/desert_bg.jpg'
import Inv_ImageList from '../components/inv_list'
const Helmets = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>

      <div className='flex flex-col  bg-white bg-opacity-50 w-9/12 shadow-2xl'>
      
      
      <HelmetGrid/>
      <div className='text-6xl text-center my-20'>
          
          Checkout our other departments for much more!
          </div>

        <div className='flex justify-center'>
        <Inv_ImageList/>
        </div>

        <div className='flex flex-col p-6 my-36 text-xl bg-black bg-opacity-50'>
              <p className='text-white m-6'>Price, if shown and unless otherwise noted, represents
                the Manufacturer's Suggested Retail Price (MSRP) and 
                does not include government fees, taxes, dealer vehicle freight/preparation, dealer document 
                preparation charges, labor, installation, or any finance charges (if applicable).
              </p>

              <p className='text-white m-6'>
              MSRP and/or final actual sales price will vary depending on options or accessories selected; contact dealer for more details. 
              </p>

              <p className='text-white m-6'>
              Due to ever changing conditions prices can and will change to reflect market conditions and 
              actual costs. Manufacturers may change costs such as MSRP, freight and setup 
              costs which we must also reflect in our sales. We apologize for
              any inconvenience this may cause.
              </p>

              <p className='text-white m-6'>
              Images, where available, are presented as reasonable facsimiles of the offered unit
              and/or manufacturer stock images. 
              Non-standard options or features may be represented. No guarantee of availability
              or inclusion of displayed options should be
              inferred; contact dealer for more details.
              </p>
          </div>
          <footer className="text-xl text-white bg-black p-5 bg-opacity-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
             
              <div>
                <h2 className="text-xl font-bold mb-4">Euro Motorsports</h2>
                <p>Name: Euro Motorsports</p>
                <p>Address: 3232 NW Street ST, Colorado Springs, CO</p>
                <p>Phone: 1-(800)-555-5555</p>
                <p>Email: <a href="mailto:euromotorsports@net.net">euromotorsports@net.net</a></p>
              </div>

            
              <div>
                <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Manufacturer Models</a></li>
                  <li><a href="#">New Inventory</a></li>
                  <li><a href="#">Used Inventory</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">STORE HOURS</h2>
                <table>
                  <tr>
                    <td>Mon</td>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <td>Tue</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Wed</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thu</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Fri</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sat</td>
                    <td>9:00 AM - 5:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sun</td>
                    <td>Closed</td>
                  </tr>
                </table>
              </div>
            </div>
      </footer>

      </div>

      
    </div>
  )
}

export default Helmets
