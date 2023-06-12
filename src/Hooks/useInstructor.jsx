import { useContext } from "react"
import { AuthContext } from "../Authproviders/AuthProvider"
import useAxios from "./UseAxios"
import { useQuery } from "@tanstack/react-query"

const useInstructor =()=>{

    const {user} = useContext(AuthContext)

    const[axiosSecure]= useAxios()
const {data: isheInstructor, loading:isinstructorLoading}= useQuery({
    queryKey:['isheInstructor', user?.email],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/users/instructor/${user.email}`);
        console.log('is admin response', res);
        return res.data.instructor
    }

})
return[isheInstructor,isinstructorLoading]

}
export default useInstructor