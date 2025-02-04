import axios from "axios"
import { X } from "lucide-react"
import { FormEvent, useState } from "react"
import { useSetRecoilState } from "recoil"
import { toast } from "sonner"
import { env } from "../../utils/env"
import { openAddAdminPopUp, openAddAppLink } from "../../utils/recoil"

export const AddAdminPopUp = () => {
  const  setOpen = useSetRecoilState(openAddAdminPopUp)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-65 z-50" onClick={() => setOpen(prev => !prev)}></div>
      <div className={`bg-[#FF6709] rounded-sm w-[90%] sm:w-96 h-80 transition-all duration-300 ease-in-out z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex`}>
      <form className="w-full h-full flex justify-center items-center p-5 flex-col gap-4">
        <input
          type="email"
          placeholder="Enter the App Link"
          onChange={e => setEmail(e.target.value)}
          className="px-3 py-2 border w-[95%] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="text"
          placeholder="Enter the App Link"
          onChange={e => setPassword(e.target.value)}
          className="px-3 py-2 border w-[95%] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 w-[60%] bg-green-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6709]"
          onClick={async (e: FormEvent) => {
            e.preventDefault()
            setLoading(true)
            try {
              const res = await axios.post(`${env.backendUrl}/api/v1/admin/create`, {email, password}, {
                headers: {
                  "Content-Type": "application/json",
                },
              })
              if(res.status === 200) {
                toast.success(res.data.message || "Admin created successfully!");
                // setOpen(prev => !prev)
                console.log("create admin", res.data)
              }
            } catch (error) {
              if(axios.isAxiosError(error)) {
                toast.error(error.response?.data.message ||"Something went wrong!");
                console.log(error)
              }else {
                toast.error("An unexpected error occurred.");
              }
            }finally {
              setLoading(false)
            }
          }}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        </form>

          <div onClick={() => setOpen(prev => !prev)}>
          <X className="absolute right-2 top-2 text-2xl font-bold cursor-pointer" />
          </div>
      </div>
    </>
  )
}


export const AddAppLink = () => {
  const  setOpen = useSetRecoilState(openAddAppLink)
  const [link, setLink] = useState("")
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-65 z-50" onClick={() => setOpen(prev => !prev)}></div>
      <div className={`bg-green-400 w-[100%] sm:w-[600px] h-52 transition-all duration-300 ease-in-out z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex rounded-sm`}>
        <div className="w-full h-full flex justify-center items-center">
        <form className="w-full h-full flex justify-center items-center p-5 flex-col gap-4">
        <input
          type="text"
          placeholder="Enter the App Link"
          onChange={e => setLink(e.target.value)}
          className="px-3 py-2 border w-[80%] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6709]"
          required
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 w-[60%] bg-[#ff6709] text-white rounded-md hover:bg-[#ff6709] focus:outline-none focus:ring-2 focus:ring-[#ff6709]"
          onClick={() => {
            localStorage.setItem("playStoreLink", link);
          }}
        >
          Submit
        </button>
        </form>
        </div>

          <div onClick={() => setOpen(prev => !prev)}>
          <X className="absolute right-2 top-2 text-2xl font-bold cursor-pointer" />
          </div>
      </div>
    </>
  )
}

