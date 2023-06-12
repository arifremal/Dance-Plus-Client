import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { useState } from "react";

const Myclass = () => {
  const [enroll] = useCart();
  const [, refetch] = useCart();
  console.log(enroll);
  const total = enroll.reduce((sum, item) => item.price + sum, 0);
  console.log(total);
  const [enrolled, setEnrolled] = useState([]);

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

  return (
    <div>
      <div className=" font-semibold flex justify-evenly items-center">
        <h3 className="text-2xl"> Selected Courses : {enroll.length}</h3>
        <h3 className="text-2xl text-black"> Total: Price ${total}</h3>
        <button className="btn btn-sm bg-yellow-400"> PAy Now</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enroll.map((row) => (
              <tr key={row._id}>
                <th>
                  <p>{row.name}</p>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={row.image} alt="Instructors" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> Seats: {row.seats}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-sm text-black">Price: ${row.price}</div>
                </td>
                <td>
                  <button
                    onClick={() => clsDelete(row._id)}
                    className="btn btn-ghost btn-xs bg-red-500 "
                  >
                    Remove
                  </button>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs bg-yellow-400">
                    Pay
                  </button>
                </th>
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Myclass;
