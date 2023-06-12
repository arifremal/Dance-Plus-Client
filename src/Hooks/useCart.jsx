import { useContext } from "react";
import { AuthContext } from "../Authproviders/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');
  const { data: enroll = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/enroll/${user?.email}`,
        {
          headers: {
            authorization: `bearer${token}`,
          },
        } 
      );
      return res.json();
    },
  });
  return [enroll, refetch];
};

export default useCart;
