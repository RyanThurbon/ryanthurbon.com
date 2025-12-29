import { UserContext } from "@/features/guestbook/providers";
import { useContext } from "react";

export function useAuthedUser() {
    const user = useContext(UserContext);

    if (!user) {
        throw new Error("[USE_AUTHED_USER]: useAuthedUser must be used within a UserProvider");
    }

    return user;
}
