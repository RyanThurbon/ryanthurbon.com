import { FieldInfo } from "@/components/forms/field-info";
import { Icons } from "@/components/shared/icons.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardFooter } from "@/components/ui/card.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { SignOut } from "@/features/guestbook/components";
import { usePostMessageForm } from "@/features/guestbook/hooks";
import { SendIcon } from "lucide-react";
import { FormEvent } from "react";

export function PostGuestbookMessageForm() {
    const { form, postMessageMutation } = usePostMessageForm();

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await form.handleSubmit();
    };

    return (
        <form onSubmit={submitForm}>
            <Card className="border-none shadow-none py-2 gap-y-2">
                <form.Field
                    name="message"
                    children={(field) => {
                        return (
                            <div className="flex flex-col gap-y-2">
                                <Textarea
                                    className="bg-secondary min-h-30"
                                    placeholder="Share a message! Let's connect!"
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    disabled={postMessageMutation.isPending}
                                />
                                <FieldInfo field={field} />
                            </div>
                        );
                    }}
                />
                <CardFooter className="flex items-center justify-between px-0">
                    <SignOut />
                    <form.Subscribe
                        selector={(state) => [
                            state.canSubmit,
                            state.isSubmitting,
                            state.isPristine,
                        ]}
                        children={([canSubmit, isSubmitting, isPristine]) => (
                            <Button
                                type="submit"
                                variant="secondary"
                                aria-label="Post message"
                                disabled={
                                    !canSubmit ||
                                    isSubmitting ||
                                    isPristine ||
                                    postMessageMutation.isPending
                                }
                            >
                                {postMessageMutation.isPending ? (
                                    <Icons.spinner className="size-4 animate-spin" />
                                ) : (
                                    <SendIcon className="size-4" />
                                )}
                                Post message
                            </Button>
                        )}
                    />
                </CardFooter>
            </Card>
        </form>
    );
}
