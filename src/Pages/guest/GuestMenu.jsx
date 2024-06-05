
import MenuItem from "../../component/sidebar/MenuItem";
import { MdOutlineRateReview } from "react-icons/md";



const GuestMenu = () => {
    return (
        <div>
             <MenuItem icon={MdOutlineRateReview} label='My Reviews' address='myreviews' />
        </div>
    );
};

export default GuestMenu;