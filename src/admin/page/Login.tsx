import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { env } from "../../utils/env";
import {toast} from "sonner"
import { useState } from "react";
import {useNavigate} from "react-router-dom"

type FormData = {
  email: string;
  password: string;
};

const AdminLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState<Partial<FormData>>({});
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setServerErrors({});
    try {
        const res = await axios.post(`${env.backendUrl}/api/v1/admin/login`, data, {
            headers: {
            "Content-Type": "application/json",
            },
            withCredentials: true
        })
        console.log(res.data)
        toast.success(res.data.message || "Login successful!");
        if(res.status === 200) {
            navigate("/admin/dashboard");
            localStorage.setItem("kiranaMartToken", res.data.token);
            reset();
        }
    } catch (error) {
        if(axios.isAxiosError(error)) {
            setServerErrors(error.response?.data.errors ?? {});
            toast.error(error.response?.data.message || "Something went wrong!");
        }
        else {
            toast.error("An unexpected error occurred.");
        }
    }finally{
        setLoading(false)
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FF6709]">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl">
        {/* Logo or Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#FF6709]">Admin Login</h1>
          <p className="mt-2 text-gray-500">
            Secure access to your admin dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className={`mt-2 w-full rounded-lg border p-3 text-gray-700 focus:outline-none focus:ring-4 shadow-sm transition ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-[#FF6709]/50"
              }`}
              placeholder="admin@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
            {serverErrors.email && (
              <p className="mt-1 text-sm text-red-500">
                {serverErrors.email}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className={`mt-2 w-full rounded-lg border p-3 text-gray-700 focus:outline-none focus:ring-4 shadow-sm transition ${
                errors.password
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-green-400/50"
              }`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
            {serverErrors.password && <p className="mt-1 text-sm text-red-500">{serverErrors.password}</p> }
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg px-4 py-3 text-white font-medium text-lg shadow-lg hover:shadow-2xl hover:scale-x-110 hover:scale-y-110 transition-transform duration-500 focus:outline-none focus:ring-4 focus:ring-green-400/50 ${loading ? "cursor-not-allowed bg-gray-500" : "hover:bg-green-400 bg-[#FF6709]"} `}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
