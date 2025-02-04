import { useState, useEffect } from "react";
import axios from "axios";
import { env } from "../../utils/env";
import COO from "../../assets/img/Team/KiramaMartCOO.jpg";
import CEO from "../../assets/img/Team/KiramaMartCEO.jpg";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  interface TeamMember {
    _id?: string;
    name: string;
    role: string;
    image: string;
  }

  // Static Team Members (Fallback in case of API failure)
  const staticMembers: TeamMember[] = [
    {
      name: "Anand Kumar",
      role: "Director and Chief Operating Officer",
      image: COO,
    },
    {
      name: "Raj Kumar",
      role: "Director and Chief Executive Officer",
      image: CEO,
    },
  ];

  // Fetch Team Members from Backend
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(`${env.backendUrl}/api/v1/our-team/all`);
        setTeamMembers(response.data.team);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setTeamMembers(staticMembers); // Use static data in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="p-8 mt-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-orange-600 mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {loading
          ? 
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-72 h-80 bg-white p-6 rounded-2xl shadow-xl animate-pulse flex flex-col items-center justify-center text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gray-300 mb-4"></div>
                <div className="w-32 h-6 bg-gray-300 rounded mb-2"></div>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </div>
            ))
          : 
            teamMembers.map((member) => (
              <div
                key={member?._id || member.name}
                className="w-72 h-80 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center justify-between text-center"
              >
                <div className="flex flex-col items-center justify-center mb-4">
                  <img
                    src={`${env.backendUrl}${member.image}`}
                    alt={member?.name}
                    className="w-32 h-32 rounded-full border-4 border-green-400 mb-4 object-cover"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">{member?.name}</h2>
                  <p className="text-md text-orange-600 font-medium">{member?.role}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default OurTeam;
