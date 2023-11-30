import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="m-5">
            <div className="text-center">
                <Link to={'/'} className="text-3xl font-bold text-cyan-700">Home</Link>
            </div>
            <div className="flex justify-center items-center">
                <img className="w-full" src="https://i.ibb.co/MB8MQGX/404.jpg" alt="" />
            </div>

        </div>
    );
};

export default ErrorPage;