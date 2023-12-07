
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import SocialLogin from "../Login/SocialLogin";

const auth = getAuth();

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { registerUser } = useContext(AuthContext);
  const handleCreateAccount = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name);

    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("");

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Password must be 6 character",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Password must contain at least one uppercase letter",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setError();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Password must contain at least one special character",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    registerUser(email, password)
      .then((result) => {
        
        const user={email, name}

        fetch('http://localhost:5000/user', {
          method: 'POST',
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res=>res.json())
            .then(data=>{
              console.log(data)
            })
        

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        setSuccess();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Account created successfully",
            showConfirmButton: false,
            timer: 1500
          });

        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-black bg-white-400 p-16 ">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left mb-5" data-aos="flip-right" data-aos-duration="1000">
            
            <img src="https://i.ibb.co/JHfYqS7/login-3.jpg" alt="" />
            
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos-duration="1000" data-aos="zoom-in">
            <div className="card-body">
            <h1 className="text-4xl text-blue-500 font-bold text-center ">
             Please Register!!
            </h1>
              <form onSubmit={handleCreateAccount}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered border-2 border-purple-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    required
                    type="photo"
                    name="photo"
                    placeholder="photoURL"
                    className="input input-bordered border-2 border-purple-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered border-2 border-purple-500"
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
                    className="input input-bordered border-2 border-purple-500"
                  />
                  <span
                    className="absolute mt-12 mr-8 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className=" btn btn-primary text-red-400 text-2xl font-serif rounded bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900">
                    Sign Up
                  </button>
                </div>
                <div>
                  <SocialLogin></SocialLogin>
                </div>
                <p className="text-slate-800 font-medium">
              Already Have an Account? please
              <Link to={"/login"}>
                <button className="btn btn-link">Login</button>
              </Link>
            </p>
              </form>
             
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

