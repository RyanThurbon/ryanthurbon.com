import { useContext } from "react";
import { UserContext } from "@/providers/user-provider.tsx";

export function useAuthedUser() {
    const user = useContext(UserContext);

    if (!user) {
        throw new Error("useAuthedUser must be used within a UserProvider");
    }

    return user;
}