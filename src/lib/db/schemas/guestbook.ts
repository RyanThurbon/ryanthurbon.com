import { userTable } from "@/lib/db/schemas/auth";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const guestbookTable = pgTable("guestbook", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
        .notNull()
        .unique()
        .references(() => userTable.id),
    name: text("name"),
    email: text("email").notNull().unique(),
    message: text("message").notNull(),
    image: text("image"),
    createdAt: timestamp("created_at")
        .$defaultFn(() => new Date())
        .notNull(),
    updatedAt: timestamp("updated_at")
        .$defaultFn(() => new Date())
        .notNull(),
});
