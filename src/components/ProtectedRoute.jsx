import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <Loader />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        // User is logged in but doesn't have permission
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
