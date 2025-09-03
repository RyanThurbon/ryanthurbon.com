import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { ChevronDownIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu.tsx";
import { useAuthedUser } from "@/hooks/auth/use-authed-user.ts";
import { useSignOutMutation } from "@/hooks/auth/use-sign-out-mutation.ts";

export function GuestbookSignOut() {
    const user = useAuthedUser();
    const signOutMutation = useSignOutMutation();

    return (
        <div className="max-w-[200px] md:max-w-[500px]">
            <DropdownMenu>
                <DropdownMenuTrigger className="hover:cursor-pointer" aria-label="Open menu" asChild>
                    <div className="flex items-center gap-x-2 text-muted-foreground">
                        <Avatar className="size-6">
                            <AvatarImage src={user.image || ""} alt={`${user.name}'s github profile picture`} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-base md:text-sm flex items-center gap-x-2 min-w-0 flex-1">
                            {signOutMutation.isPending ? (
                                "Signing out..."
                            ) : (
                                <>
                                    <span className="truncate">{user.name}</span>
                                    <ChevronDownIcon className="size-4 flex-shrink-0" />
                                </>
                            )}
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuLabel className="text-muted-foreground">Manage</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem aria-label="Sign out" onClick={() => signOutMutation.mutate()}>
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
