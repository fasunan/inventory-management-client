import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    
    return (
        <div className="mt-8 mb-8">
            <div>
                <div className="mb-4">
                    <h2 className="text-center text-4xl font-bold text-cyan-500 underline" data-aos="flip">Our Services Location</h2>
                </div>
            </div>
            <div className="flex justify-center" data-aos="zoom-in" data-aos-duration="1000">
                <img className="h-[400px]" src="https://i.ibb.co/B6Jvr8f/location-symbol-beautiful-city.jpg" alt="" />
            </div>
            <div>
                <img src=" https://i.ibb.co/NLrjFxJ/34881962-8182643.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default Services;