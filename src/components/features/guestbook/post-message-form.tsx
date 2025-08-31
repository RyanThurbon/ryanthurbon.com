import { GuestbookSignOut } from "@/components/features/guestbook/auth/sign-out.tsx";
import { usePostMessageForm } from "@/hooks/forms/use-post-message-form.tsx";
import { FormEvent } from "react";
import { Card, CardFooter } from "@/components/ui/card.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";
import { SendIcon } from "lucide-react";
import { FieldInfo } from "@/components/shared/form-field-info.tsx";
import { Icons } from "@/components/shared/icons.tsx";

export function GuestbookPostMessageForm() {
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
                                    className="bg-secondary min-h-[120px]"
                                    placeholder="Share a message! Let's connect!"
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    disabled={postMessageMutation.isPending}
                                />
                                <FieldInfo field={field}/>
                            </div>
                        );
                    }}
                />
                <CardFooter className="flex items-center justify-between px-0">
                    <GuestbookSignOut/>
                    <form.Subscribe
                        selector={(state) => [state.canSubmit, state.isSubmitting, state.isPristine]}
                        children={([canSubmit, isSubmitting, isPristine]) => (
                            <Button
                                type="submit"
                                variant="secondary"
                                aria-label="Post message"
                                disabled={!canSubmit || isSubmitting || isPristine || postMessageMutation.isPending}
                            >
                                {postMessageMutation.isPending ? (
                                    <Icons.spinner className="size-4 animate-spin"/>
                                ) : (
                                    <SendIcon className="size-4"/>
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
