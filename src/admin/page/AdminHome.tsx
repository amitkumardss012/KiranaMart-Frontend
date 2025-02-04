import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { AddAdminPopUp, AddAppLink } from '../../components/common/PopUp';
import { env } from '../../utils/env';
import { openAddAdminPopUp, openAddAppLink } from '../../utils/recoil';
import AdminPage from '../components/app_admin_page';

const AdminHome = () => {
  const open = useRecoilValue(openAddAdminPopUp);
  const openApp = useRecoilValue(openAddAppLink)
  // const 
  const getAllAdmin = async () => {
    try {
      const res = await axios.get(`${env.backendUrl}/api/v1/admin/all-admin`, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log("all Admin",res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {getAllAdmin()},[])
  return (
    <div className='mt-20'>
      {open && <div className='w-full h-full flex justify-center items-center'>
        <AddAdminPopUp />
      </div>
      }
      {
        openApp && <div className='w-full h-full flex justify-center items-center'>
          <AddAppLink />
        </div>
      }
      <AdminPage />
    </div>
    
  )
}

export default AdminHome