import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authproviders/AuthProvider";
import MyselectedClassCard from "./MyselectedClassCard";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";

const MyselectedClass = () => {
  const { user } = useContext(AuthContext);
  const [enrolled, setEnrolled] = useState([]);
  const [, refetch] = useCart();

  const clsDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dance-plus-server.vercel.app/enroll/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Successfully removed",
                showConfirmButton: false,
                timer: 1500,
              });
              const remain = enrolled.filter((enroll) => enroll._id !== id);
              setEnrolled(remain);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://dance-plus-server.vercel.app/enroll/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEnrolled(data);
      });
  }, [user]);
  return (
    <div>
      <h1 className="text-2xl  ">Selected Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10 sm:p-2 ">
        {enrolled.map((enroll) => (
          <MyselectedClassCard
            key={enroll._id}
            enroll={enroll}
            clsdelete={clsDelete}
            // toyDelete={toyDelete}
            // toyUpdate={toyUpdate}
          ></MyselectedClassCard>
        ))}
      </div>
    </div>
  );
};

export default MyselectedClass;
