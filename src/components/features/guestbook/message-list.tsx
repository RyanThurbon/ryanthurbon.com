import { useSuspenseQuery } from "@tanstack/react-query";
import { getMessagesQueryOptions } from "@/queries/guestbook/get-messages-query.ts";
import { Card, CardContent, CardHeader } from "@/components/ui/card.tsx";
import dayjs from "dayjs";

export function GuestbookMessageList() {
    const { data: guestbookEntries } = useSuspenseQuery(getMessagesQueryOptions());

    return (
        <div className="mt-16 flex flex-col gap-y-4">
            {guestbookEntries.length > 0 ? (
                guestbookEntries.map((entry, index) => (
                    <Card className="border-0 shadow-none border-b border-dashed py-2 gap-y-2 rounded-none" key={index}>
                        <CardHeader className="flex items-center justify-between px-0">
                            <div className="line-clamp-1">
                                {entry.name || entry.email}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {dayjs(entry.createdAt).format("YYYY-MM-DD")}
                            </div>
                        </CardHeader>
                        <CardContent className="py-2 px-0 text-muted-foreground">
                            {entry.message}
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Card className="border-none shadow-none py-2 gap-y-2 rounded-none">
                    <CardContent className="py-4 px-0 text-muted-foreground">
                        Looks like no-one has signed the guestbook yet. Be the first!
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
