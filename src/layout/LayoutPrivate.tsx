import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
    const {stateUser} = useUserContext()
    console.log("layoutPrivate", stateUser)
    return (
        <>
        <h1>Layoutprivate</h1>
        {
            stateUser ? <Outlet /> : <Navigate to="/"/>
        }
            
            
        </>
    );
};

export default LayoutPrivate;
