import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";



const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    
    const navigate = useNavigate();

    const handleGoogleLogIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            fetch('http://localhost:5000/user', {
                method: 'POST',
                headers:{
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(userInfo)
              })
              .then(res=>res.json())
                  .then(data=>{
                    console.log(data)
                    navigate(location?.state ? location.state : "/");
                  })
        })
    }

    return (
        <div className="p-8">
             <div className="gap-4 font-serif flex text-base">
                <button onClick={handleGoogleLogIn} className="btn w-full">
                  {" "}
                  <FcGoogle className="text-lg"></FcGoogle>Google
                </button>
              </div>
        </div>
    );
};

export default SocialLogin;
