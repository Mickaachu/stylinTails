import { AuthContext } from "../authContext";
import { useContext } from "react";

export const useAuthContextProvider = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useContextProvider must be used within an AuthProvider')
    }
    return context;
}