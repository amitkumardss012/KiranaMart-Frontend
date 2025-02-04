import axios from "axios";
import { Store } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { env } from "../../utils/env";
import { useState } from "react";
import { toast } from "sonner";

type FormData = {
  firstname: string;
  lastName?: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  state: string;
  pincode: string;
};

const formFields = [
  {
    name: "firstname",
    label: "First Name*",
    placeholder: "Enter your first name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter your last name",
    type: "text",
    required: false,
  },
  {
    name: "email",
    label: "Email ID*",
    placeholder: "your@email.com",
    type: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Mobile Number*",
    placeholder: "Enter your mobile number",
    type: "tel",
    required: true,
  },
  {
    name: "address1",
    label: "Address Line 1*",
    placeholder: "Street address",
    type: "text",
    required: true,
  },
  {
    name: "address2",
    label: "Address Line 2",
    placeholder: "Apartment, suite, unit, etc. (optional)",
    type: "text",
    required: false,
  },
  {
    name: "state",
    label: "State*",
    placeholder: "Enter your state",
    type: "text",
    required: true,
  },
  {
    name: "pincode",
    label: "PIN Code*",
    placeholder: "Enter PIN code",
    type: "text",
    required: true,
  },
];

const FranchiseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
    } = useForm<FormData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Partial<FormData>>({});

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setLoading(true);
    setServerErrors({});
    try {
      const res = await axios.post(`${env.backendUrl}/api/v1/franchise/apply`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(res.data.message || "Application submitted successfully!");
      if(res.status === 200) {
      reset();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerErrors(error.response?.data.errors ?? {});
        toast.error(error.response?.data.message || "Something went wrongggggggg!");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 -mt-20 relative z-10 flex justify-center">
      <div className="flex flex-col space-y-8 w-[90%]">
        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Application Form
              </h2>
              <p className="text-gray-600">Start your journey with us</p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Store className="text-primary w-6 h-6" />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {formFields.map((field, index) => (
              <div
                key={index}
                className={field.name === "address1" || field.name === "address2" ? "md:col-span-2" : ""}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  {...register(field.name as keyof FormData, {
                    required: field.required
                      ? `${field.label} is required`
                      : false,
                  })}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
                {errors[field.name as keyof FormData] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.name as keyof FormData]?.message?.toString()}
                  </p>
                )}
                {serverErrors[field.name as keyof FormData] && (
                  <p className="text-red-500 text-sm mt-1">
                    {serverErrors[field.name as keyof FormData]?.toString()}
                  </p>
                )}
              </div>
            ))}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#FF6709] hover:bg-green-400"
                } text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-primary/90 hover:to-primary transform hover:scale-[1.02] transition-all duration-300 shadow-lg`}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;
