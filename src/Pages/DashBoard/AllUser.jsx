import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: allusers = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://dance-plus-server.vercel.app/users");
    return res.json();
  });

  const deleteUser = (user) => {};
  const adminMake = (user) => {
    fetch(`https://dance-plus-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();

          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const instructorMake = (user) => {
    fetch(`https://dance-plus-server.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();

          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const studentMake = (user) => {
    fetch(`https://dance-plus-server.vercel.app/users/student/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();

          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an student now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-end">
        Totall Users : {allusers.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => adminMake(user)}
                      className="btn btn-ghost btn-xs m-2 bg-yellow-400"
                    >
                      Make admin
                    </button>
                  )}
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => instructorMake(user)}
                      className="btn btn-ghost btn-xs m-2 bg-yellow-400"
                    >
                      Make instructor
                    </button>
                  )}
                  {user.role === "student" ? (
                    "student"
                  ) : (
                    <button
                      onClick={() => studentMake(user)}
                      className="btn btn-ghost btn-xs m-2 bg-yellow-400"
                    >
                      Make student
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-ghost btn-xs bg-red-500 "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
