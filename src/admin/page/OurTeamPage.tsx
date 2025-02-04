import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Trash2 } from "lucide-react";
import axios, { AxiosError } from "axios";
import { env } from "../../utils/env";
import {toast} from "sonner"

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
}

const OurTeamPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    setSelectedFile(file); // Store actual file
    setImagePreview(URL.createObjectURL(file)); // Show preview
  }
};


  // 🔹 Fetch Team Members from Backend
  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${env.backendUrl}/api/v1/our-team/all`);
      console.log(response.data)
      setTeamMembers(response.data.team);;
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  // 🔹 Handle Form Submit to Add Member
  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
  
      formData.append("name", data.name);
      formData.append("role", data.role);
      
      if (selectedFile) {
        formData.append("image", selectedFile);
      }
  
      const response = await axios.post(`${env.backendUrl}/api/v1/our-team/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log(response.data);
      toast.success(response.data.message || "Team member added successfully!");
      setTeamMembers([...teamMembers, response.data.outTeam]);
  
      reset();
      setImagePreview(null);
      setSelectedFile(null); // Clear file selection
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message || "Something went wrong!");
      }
    }
  };
  

  // 🔹 Delete Team Member
  const handleDelete = async (_id: string) => {
    try {
      await axios.delete(`${env.backendUrl}/api/v1/our-team/delete/${_id}`);
      setTeamMembers(teamMembers.filter((member) => member._id !== _id));
    } catch (err) {
      toast.error("failed to delete team member");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-20">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-[#ff6709] text-center mb-6">Add Team Member</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-[#ff6709] focus:border-[#ff6709] outline-none"
              placeholder="Enter Name"
              required
            />
          </div>

          {/* Role Input */}
          <div>
            <label className="block text-gray-700 font-medium">Role</label>
            <input
              type="text"
              {...register("role", { required: true })}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-[#ff6709] focus:border-[#ff6709] outline-none"
              placeholder="Enter Role"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium">Upload Image</label>
            <div className="relative mt-2 border-2 border-dashed border-[#ff6709] p-4 rounded-xl text-center cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-72 object-cover rounded-lg" />
              ) : (
                <p className="text-gray-500">Click to upload image</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#ff6709] hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Add Member
          </button>
        </form>
      </div>

      {/* Team Members Table */}
      {loading ? (
        <p className="text-center text-gray-600 mt-6">Loading team members...</p>
      ) : (
        teamMembers?.length > 0 && (
          <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-green-400 text-center mb-4">Team Members</h2>

            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
                <thead className="bg-[#ff6709] text-white">
                  <tr>
                    <th className="p-3 border whitespace-nowrap">Image</th>
                    <th className="p-3 border whitespace-nowrap">Name</th>
                    <th className="p-3 border whitespace-nowrap">Role</th>
                    <th className="p-3 border whitespace-nowrap">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers && teamMembers?.map((member) => (
                    <tr key={member?._id} className="border">
                      <td className="p-3 border text-center">
                        {member?.image ? (
                          <img src={`${env.backendUrl}${member?.image}`} alt={member?.name} className="w-12 h-12 rounded-full object-cover mx-auto" />
                        ) : (
                          <span className="text-gray-500">No Image</span>
                        )}
                      </td>
                      <td className="p-3 border text-center whitespace-nowrap">{member?.name}</td>
                      <td className="p-3 border text-center whitespace-nowrap">{member?.role}</td>
                      <td className="p-3 border text-center">
                        <button onClick={() => handleDelete(member?._id)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-6 h-6 inline-block" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default OurTeamPage;
