import { useState } from "react";
import { useEffect } from "react";
import useAuth from "./useAuth";

const useSingleUser = () => {
    const user=useAuth()
    const [singleUser, setSingleUser]=useState({})
    console.log(singleUser)
    useEffect(()=>{
        fetch(`http://localhost:5000/singleUser?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setSingleUser(data))
    },[user.email])
    return singleUser
   
}
export default useSingleUser;