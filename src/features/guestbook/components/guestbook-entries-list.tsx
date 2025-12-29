import { Card, CardContent, CardHeader } from "@/components/ui/card.tsx";
import { useGuestbookEntries } from "@/features/guestbook/hooks";
import dayjs from "dayjs";

export function GuestbookEntriesList() {
    const { data: guestbookEntries, error } = useGuestbookEntries();

    if (error) {
        return (
            <Card className="border-none shadow-none py-2 gap-y-2 rounded-none">
                <CardContent className="py-4 px-0 text-muted-foreground">
                    {error.message}
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="mt-16 flex flex-col gap-y-4">
            {guestbookEntries.length > 0 ? (
                guestbookEntries.map((entry, index) => (
                    <Card
                        className="border-0 shadow-none border-b border-dashed py-2 gap-y-2 rounded-none"
                        key={index}
                    >
                        <CardHeader className="flex items-center justify-between px-0">
                            <div className="line-clamp-1">{entry.name || entry.email}</div>
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
