
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [logError, setLogError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const { signInUser, googleSignIn } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        setSuccess("");
        
        Swal.fire({
            position: "center",
            icon: "success",
            title: " User Login successfully",
            showConfirmButton: false,
            timer: 1500
          });
        return;
      })
      .catch((error) => {
        console.error(error);
        setLogError(error.message);
      });
  };
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-black p-16" >
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left mb-5">
           
            <img data-aos="flip-right" data-aos-duration="1000" src="https://i.ibb.co/jJLNRVh/login-2.jpg" alt="" />

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="zoom-in" data-aos-duration="1000">
            <div className="card-body">
            <h1 className="text-4xl text-rose-500 font-bold text-center mb-10">Login!!</h1>
              <form onSubmit={handleLogIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered border-2 border-pink-600"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered border-2 border-pink-600"
                  />
                  <span
                    className="absolute mt-12 mr-8 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary  text-red-500 text-2xl font-serif rounded bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900 ">
                    Login
                  </button>
                </div>
              </form>

              {logError && <p>{logError}</p>}
              {success && <p>{success}</p>}
              
              <p className="text-pink-600">Or you can log in with </p>
              <div className="gap-4 font-serif flex text-base">
                <button onClick={handleGoogleLogIn} className="btn w-full">
                  {" "}
                  <FcGoogle className="text-lg"></FcGoogle>Google
                </button>
              </div>
              <p className="text-slate-800 font-medium ">
                Do not Have an Account? please
                <Link to={"/register"}>
                  <button className="btn btn-link">Register</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
