import { MdOutlineManageAccounts } from "react-icons/md";
import MenuItem from '../../component/sidebar/MenuItem'


const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={MdOutlineManageAccounts} label='Manage Users' address='manageusers' />
    </>
  )
}

export default AdminMenu