import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authproviders/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const path = useLocation();
  const from = path.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signIn, gUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully logged in done",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  const handleGoggle = () => {
    gUser().then((result) => {
      const loggeduser = result.user;
      console.log(loggeduser);


      const savedUser = { name: loggeduser.displayName, email: loggeduser.email };
      console.log(savedUser);
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
        
            navigate(from);
         
          }
        });



      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully logged in done",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from);
    });
  };

  console.log(watch("example"));

  return (
    <div className="pt-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center ">Login now!</h1>
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
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && <span>Password is required</span>}

                <label className="label">
                  <p>
                    Are you new? <Link to={"/signup"}>Register</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn  bg-yellow-400 text-black "
                  value="Login"
                />
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="text-center py-2">
              <button
                onClick={handleGoggle}
                className="btn  bg-yellow-400 text-black "
              >
                Continue with Goggle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
