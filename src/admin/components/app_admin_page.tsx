import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FranchiseApplication } from "../../types/types";
import { env } from "../../utils/env";
import ApplicationsChart from "./Application_Chart";
import ApplicationsTable from "./Application_Table";
import MetricCard from "./MetricCard";

export default function AdminPage() {
  const [applications, setApplications] = useState({
    currentMonthFranchiseCount: 0,
    totalFranchiseCount: 0,
  });
  const [applicationsData, setApplicationsData] = useState<FranchiseApplication[]>([]);

  const getTotalApplications = async () => {
    try {
      const res = await axios.get(
        `${env.backendUrl}/api/v1/franchise/total-application`
      );
      if(res.status === 200) {
        setApplications(res.data);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const getAllApplications = async () => {
    try {
      const res = await axios.get(
        `${env.backendUrl}/api/v1/franchise/all-franchise`
      );

      if(res.status === 200) {
        setApplicationsData(res.data.franchise);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTotalApplications();
    getAllApplications();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <AdminNavbar /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link to="/admin/our-team">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-[#ff6709] text-white rounded-sm hover:bg-green-400 hover:scale-105 transition-all duration-300"
            >
              Our Team
            </button>
          </div>
              </Link>
          <Link to="/admin/all-admin">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-[#ff6709] text-white rounded-sm hover:bg-green-400 hover:scale-105 transition-all duration-300"
            >
              See All Admin
            </button>
          </div>
              </Link>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">
          <MetricCard
            title="Total Applications"
            value={applications.totalFranchiseCount}
            percentage={40}
            color="text-[#ff6709]"
          />
          <MetricCard
            title="This Month"
            value={applications.currentMonthFranchiseCount}
            percentage={-14}
            color="text-green-400"
          />
        </div>

        {/* Chart */}
        <div className="mb-8">
          <ApplicationsChart />
        </div>

        {/* Applications Table */}
        <div className="mb-8">
          <ApplicationsTable applications={applicationsData} />
        </div>
      </div>
    </div>
  );
}
