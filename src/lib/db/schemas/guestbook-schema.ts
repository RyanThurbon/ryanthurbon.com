import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "@/lib/db/schemas/auth-schema.ts";

export const guestbook = pgTable("guestbook", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id),
    name: text("name"),
    email: text("email").notNull().unique(),
    image: text("image"),
    message: text("message").notNull(),
    createdAt: timestamp("created_at")
        .$defaultFn(() => /* @__PURE__ */ new Date())
        .notNull(),
    updatedAt: timestamp("updated_at")
        .$defaultFn(() => /* @__PURE__ */ new Date())
        .notNull(),
});