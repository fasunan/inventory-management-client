import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fashion Store || Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;