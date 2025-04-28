import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "./store/userApi";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { setToken } from "../../react-demo/src/store/userAuthSlice";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //use the mutation
  const [login, { isLoading }] = useSignInMutation();

  // const { provider } = useSelector((state) => state.auth);

  const handleLoginSubmit = async (data) => {
    try {
      console.log("Login Data", data);
      const res = await login({
        email: data.email,
        password: data.password,
      }).unwrap();
      //user object inside res , now call set credentials, to set the value in local storage
      dispatch(setToken(res.user));
      toast.success(res.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error(err?.data?.error || err?.error, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        theme: "light",
        transition: Bounce,
      });
      navigate("/signin");

      // console.log("Error - ", err);
      // console.log("Error Details", err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className="container justify-content-around">
        <ToastContainer />
        <div className="row">
          <label className="col-lg-6 offset-lg-6 my-2 fs-3">Signin Page</label>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <div className="col-lg-6 offset-lg-6 my-2">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                {...register("email", {
                  required: "You must enter an email address",
                })}
              />
              {errors.email?.type == "required" && (
                <p className="py-1" style={{ color: "red" }}>
                  email is required
                </p>
              )}
            </div>
            <div className="col-lg-6 offset-lg-6 my-2">
              <label className="form-label">Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your password"
                {...register("password", {
                  required: "You must enter your account password.",
                })}
              />
              {errors.password?.type == "required" && (
                <p className="py-1" style={{ color: "red" }}>
                  Password is required
                </p>
              )}
            </div>
            <div className="col-lg-6 offset-lg-6 my-2">
              <button
                className="btn btn-primary"
                data-testid="signin-button"
                type="submit"
              >
                Signin
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
