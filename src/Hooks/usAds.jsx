import { useContext } from "react"
import { AuthContext } from "../Authproviders/AuthProvider"
import useAxios from "./UseAxios"
import { useQuery } from "@tanstack/react-query"

const useAds =()=>{
const {user}=useContext(AuthContext)
const[axiosSecure]= useAxios()
const {data: isheAdmin, loading:isLoading}= useQuery({
    queryKey:['isheAdmin', user?.email],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        console.log('is admin response', res);
        return res.data.admin
    }

})
return[isheAdmin,isLoading]

}
export default useAds