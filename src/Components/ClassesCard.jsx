import { useContext } from "react";
import { AuthContext } from "../Authproviders/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";

const ClassesCard = ({ item }) => {
  const { _id, image, name, InsturorName, email, price, seats } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const handleAddtoCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const enrolledclass = {
        clssId: _id,
        seats,
        price,
        name,
        image,
        email: user.email,
      };

      fetch("https://dance-plus-server.vercel.app/enroll", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(enrolledclass),
      })
        .then((res) => res.json())

        .then((data) => {
          if (data.insertedId) {
            refetch();

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Booked Done Please check on My Classes Page",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to purchase this course",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="pt-20">
      <div className="card w-96 bg-white pt-30 ">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl object-cover " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-start">{name}</h2>
          <p className="">{InsturorName}</p>
          <p className="">Email: {email}</p>
          <div className="flex justify-between ">
            <p className="me-10">seats: {seats}</p>

            <p className="">Price: {price}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleAddtoCart(item)}
              className="btn  bg-yellow-400 text-black "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
