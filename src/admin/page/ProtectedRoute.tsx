import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({children}: {children: ReactNode}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("kiranaMartToken")) {
            navigate("/admin/login");
        }
    }, [navigate]);

    return children;
}

export default ProtectedRoute

export const AdminLoginProtected = ({children}: {children: ReactNode}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("kiranaMartToken")) {
            navigate("/admin/dashboard");
        }
    }, [navigate]);
    return children
}