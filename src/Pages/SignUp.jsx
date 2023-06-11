import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authproviders/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          const savedUser = { name: data.name, email: data.email };

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                navigate("/");
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Registration Successfully  done",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="pt-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center ">
              Registration Now!
            </h1>
            <p className="py-6 text-center ">
              Provident cupiditate voluptatem et in. Quaerat <br /> fugiat ut
              assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  {...register("PhotoUrl")}
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  {...register("email")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8}/,
                  })}
                  className="input input-bordered"
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-500 ">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 ">Password Must be 6 character</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 ">
                    Password Must less than 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 ">
                    Password must have one uppercase one lowercase one number &
                    one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirm-password", { required: true })}
                  className="input input-bordered"
                />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="label">
                  <p>
                    Already have an Account? <Link to={"/login"}>LogIn</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn  bg-yellow-400 text-black "
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
