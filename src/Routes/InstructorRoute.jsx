import { Navigate, useLocation } from "react-router-dom";
import UseInstructor from "../Hooks/UseInstructor";
import UseAuth from "../Hooks/useAuth";

const InstructorRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const [isInstructor, isInstructorLoading] = UseInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};


export default InstructorRoute;