import { createContext, ReactNode } from "react";
import { authServer } from "@/lib/auth/server.ts";

type User = typeof authServer.$Infer.Session["user"]

export const UserContext = createContext<User | undefined>(undefined);

type UserProviderProps = {
    user: User;
    children: ReactNode;
}

export function UserProvider(props: UserProviderProps) {
    return (
        <UserContext.Provider value={props.user}>
            {props.children}
        </UserContext.Provider>
    );
}