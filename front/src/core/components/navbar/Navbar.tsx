import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg"
import {logout} from "./function/logout.function.ts"
const Navbar = () => {

    const handlerClickLinkLogout = ()=>{
        logout()
    }
    return (
        <div className={"mr-4 ml-4 h-[96px]"}>
            <div className={"mx-auto max-w-screen-xl h-[96px]"}>
                <div className={"mt-[27px] mb-[27px] flex items-center justify-between"}>
                    <div className={"flex items-center"}>
                        <img src={logo} alt={"logo"} height={"36"} width={"36"}/>
                        <p className={"ml-1 text-2xl font-bold"}>
                            Boardable
                        </p>
                    </div>
                    <div>
                        <Link to={'/account'} className={"border border-gray-700 py-[8px] px-[2px] rounded-lg sm:px-[12px]"}>My Account</Link>
                        <Link to={'/'} className={"bg-[#E5E5E5] py-[8px] px-[12px] ml-4 rounded-lg"}  onClick={handlerClickLinkLogout}>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;