import React, { useContext } from "react";
import { AuthContext } from "../Authproviders/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { data: enroll = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/enroll?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [enroll, refetch];
};

export default useCart;
