import axios from "axios";
import { env } from "../../utils/env";
import { useEffect, useState } from "react";
import { AddAdminPopUp, AddAppLink } from "../../components/common/PopUp";
import { useRecoilValue } from "recoil";
import { openAddAdminPopUp, openAddAppLink } from "../../utils/recoil";

type Admin = {
  _id: string;
  email: string;
};

const AllAdmin = () => {
  const open = useRecoilValue(openAddAdminPopUp);
  const openApp = useRecoilValue(openAddAppLink);
  const [admin, setAdmin] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all admins
  const getAllAdmin = async () => {
    try {
      const res = await axios.get(`${env.backendUrl}/api/v1/admin/all-admin`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAdmin(res.data.admin);
      console.log("All Admins:", res.data.admin);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllAdmin();
  }, []);

  return (
    <>
      {/* Popups */}
      {open && (
        <div className="w-full h-full flex justify-center items-center">
          <AddAdminPopUp />
        </div>
      )}
      {openApp && (
        <div className="w-full h-full flex justify-center items-center">
          <AddAppLink />
        </div>
      )}

      {/* Main Content */}
      <div className="mt-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 shadow-2xl p-12 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-8 tracking-wide drop-shadow-lg">
          🌟 All Admins
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {loading
            ? // Skeleton Loading Effect
              [...Array(3)].map((_, index) => <AdminLoader key={index} />)
            : admin.map((item) => (
                <div
                  key={item._id}
                  className="relative bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-6 max-w-sm w-72 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-30"></div>

                  {/* Admin Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-2xl font-bold text-orange-500">
                        {item.email[0].toUpperCase()}
                      </span>
                    </div>
                    <p className="mt-4 text-lg font-semibold text-white">
                      {item.email}
                    </p>
                    <span className="text-sm text-orange-200">Admin</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default AllAdmin;

const AdminLoader = () => {
  return (
    <div className="relative bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-6 max-w-sm w-72 animate-pulse">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-30"></div>

      {/* Skeleton Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        <div className="mt-4 h-4 w-32 bg-gray-300 rounded"></div>
        <div className="mt-2 h-3 w-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};
