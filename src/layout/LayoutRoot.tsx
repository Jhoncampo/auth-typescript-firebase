import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
    return (
        <>

            <Navbar/>
            <h1>LayoutRoot</h1>
            <Outlet />
        </>
    );
};

export default LayoutRoot;
