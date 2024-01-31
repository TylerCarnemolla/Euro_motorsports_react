
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import {auth, Providers} from "../config/firebase"


function Navbar() {
    const [authenticated, setAuthenticated] = useState(false);  

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    const signOutOnClick = async () =>{
        try{
            await signOut(auth);
            setAuthenticated(false);
        } catch (error){
            console.error('Error signing out:', error);
        }
        
    }

    const signInOnClick = async () => {
        try {
            const response = await signInWithPopup(auth, Providers.google);
            if (response.user) {
                setAuthenticated(true);  
            }
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    

 


  return (
        <nav className='bg-red-600 pb-12'>
        <div className='flex justify-between'>
                <Link to="/Bikes"  className='text-yellow-500'>Check out our No-Interst Financing on new Dirtbikes and ATV's!  </Link>
                <p className='text-white'>Fast and Free Shipping on Sales over $80!</p>
                <p className='text-white'>No Hassle Returns!</p>
                <p className='text-white'>24/7 Customer Service</p>
        </div> 
        
                <div className='flex justify-center'>   
                            <div className='flex flex-col items-center '>

                                <h3 className='font-semibold pt-2 font-serif text-5xl text-yellow-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                                    EURO MOTORSPORTS
                                </h3>
                            </div> 
                </div>  
                <div className='flex justify-between items-end'>  
                        <p className='text-white underline'>Create an Account for Faster and Easier Shopping!</p> 
                        <p className='text-white underline'>Members Have Access to Exculsive Deals and Savings</p>  
                        <p className='text-white underline'>By Browing you Give Consent to our use of Cookies</p> 
                            <div>
                                                    {
                                        !auth.currentUser?
                                        <button className='p-3 m-5 border-2 border-black rounded-xl  bg-yellow-500 justify-center'>
                                            <div >
                                                <Link to="/" onClick={() => {signInOnClick()}} className='flex place-items-center 
                                                lg:inline-block lg:mt-0 text-black hover:text-white'>
                                                    Login

                                                </Link>
                                            </div>
                                        </button>
                                        :
                                        <button className='p-3 m-5  border-black border-2 rounded-xl bg-yellow-500 justify-center'>
                                            <div>
                                                <Link to="/" onClick={() => {signOutOnClick()}} className='flex place-items-center 
                                                lg:inline-block lg:mt-0 text-black hover:text-white'>
                                                    Sign Out

                                                </Link>
                                            </div>
                                        </button>
                                    } 
                            </div>
                </div>
        
            <div className='flex  justify-around bg-black'>
                
                
            
                    <button className="p-3 bg-black  justify-center">
                            <div>
                                <Link to='/'  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-yellow-400 hover:text-white '>
                                        Home
                                </Link>
                            </div>

                    </button>
                    <button className="p-3 bg-black  justify-center">
                            <div>
                                <Link to='/Bikes' className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-yellow-400 hover:text-white '>
                                        Dirtbikes
                                </Link>
                            </div>

                    </button>
                    <button className="p-3 bg-black  justify-center">
                            <div>
                                <Link to='/Atvs' className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-yellow-400 hover:text-white '>
                                        ATV's
                                </Link>
                            </div>

                    </button>
                    <button className="p-3 bg-black  justify-center">
                            <div>
                                <Link to='/Helmets'  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-yellow-400 hover:text-white '>
                                        Helmets
                                </Link>
                            </div>

                    </button>
                    <button className="p-3 bg-black  justify-center">
                            <div>
                                <Link to='/Gear'  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-yellow-400 hover:text-white '>
                                        Gear
                                </Link>
                            </div>

                    </button>
                    <button className="p-3 bg-black  justify-center">
                            <div>
                                <Link to='/Contact'  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-yellow-400 hover:text-white '>
                                        Contact
                                </Link>
                            </div>

                    </button>
                    <button className="p-3 bg-black  justify-center">
                            <div>
                                <Link to='/About'  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-yellow-400 hover:text-white '>
                                        About
                                </Link>
                            </div>

                    </button>
                    
             </div>
        </nav>


  )
}

export default Navbar
