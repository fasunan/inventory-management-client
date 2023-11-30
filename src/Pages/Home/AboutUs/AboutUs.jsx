/* eslint-disable react/no-unescaped-entities */

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    


    return (
        <div className="mt-36">
            <div>
                    <h2 className="text-center text-4xl font-bold underline">About Us</h2>
            </div>
            <div>
                <div className="hero min-h-screen bg-base-200 relative mt-10">
                    {/* Background Image */}
                    <img
                        src="https://i.ibb.co/m5Sb9FZ/bgimg.jpg"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"

                    />

                    <div className="hero-content flex-col lg:flex-row bg-black opacity-75" data-aos="zoom-in" data-aos-duration="1000">
                        <div className='lg:w-1/2 relative'>
                            <img src="https://i.ibb.co/CzKtBb1/istockphoto-1460439032-612x612.jpg" className="w-3/4 rounded-lg shadow-2xl" />

                        </div>
                        <div className='lg:w-1/2 space-y-5 p-4 z-10 relative text-white'>
                            <h3 className='text-3xl text-yellow-500 font-bold'>Empowering Your Style</h3>
                            <h1 className="text-5xl font-bold">Discover Fashion that Defines You</h1>
                            <p className="py-6">Elevate your wardrobe with timeless pieces that speak to your unique style. At Fashion Shop, we curate a collection that empowers you to express yourself through fashion. Our commitment is to provide a seamless shopping experience filled with elegance and individuality.</p>
                            <p className="py-6">Explore the latest trends, embrace your personality, and make a statement with every outfit. Fashion is more than what you wear; it's a reflection of your identity. Join us on a journey of self-expression through the art of fashion.</p>
                            <button className="btn btn-warning">Discover Your Style</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
