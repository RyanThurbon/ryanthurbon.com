import { revalidateLogic, useForm } from "@tanstack/react-form";
import { usePostMessageMutation } from "@/hooks/guestbook/use-post-message-mutation.ts";
import { postMessageFormSchema } from "@/server/functions/guestbook/post-message-fn.ts";

export function usePostMessageForm() {
    const postMessageMutation = usePostMessageMutation();

    const form = useForm({
        defaultValues: {
            message: "",
        },
        validators: {
            onMount: postMessageFormSchema,
            onChange: postMessageFormSchema,
        },
        validationLogic: revalidateLogic(),
        onSubmit: async ({ value }) => {
            postMessageMutation.mutate(value);
            form.reset();
        }
    });

    return { form, postMessageMutation };
}
