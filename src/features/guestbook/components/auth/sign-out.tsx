import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu.tsx";
import { useAuthedUser, useSignOutMutation } from "@/features/guestbook/hooks";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

export function SignOut() {
    const user = useAuthedUser();
    const signOutMutation = useSignOutMutation();

    return (
        <div className="max-w-50 md:max-w-125">
            <DropdownMenu>
                <DropdownMenuTrigger
                    className="hover:cursor-pointer"
                    aria-label="Open menu"
                    asChild
                >
                    <div className="flex items-center gap-x-2 text-muted-foreground">
                        <Avatar className="size-6">
                            <AvatarImage src={user.image || ""} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm flex items-center gap-x-2 min-w-0 flex-1">
                            {signOutMutation.isPending ? (
                                "Signing out..."
                            ) : (
                                <>
                                    <span className="truncate">{user.name}</span>
                                    <ChevronDownIcon className="size-4 shrink-0" />
                                </>
                            )}
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuLabel className="text-muted-foreground">Manage</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        aria-label="Sign out"
                        onClick={() => signOutMutation.mutate()}
                    >
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
