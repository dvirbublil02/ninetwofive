import {useLocation,Navigate,Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth ();
    const location =useLocation();
    console.log(auth);

    return (
        auth?.role?.find(role => allowedRoles?.includes(role))
        ? <Outlet />
        : auth?.user 
        ? <Navigate to="/Unauthorized" state={{ from: location}} replace />
        : <Navigate to ="/Login" state={{ from: location}} replace />

    );
}
