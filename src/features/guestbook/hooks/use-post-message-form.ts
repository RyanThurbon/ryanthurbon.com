import { usePostMessageMutation } from "@/features/guestbook/hooks";
import { postMessageFormSchema } from "@/features/guestbook/server/functions";
import { revalidateLogic, useForm } from "@tanstack/react-form";

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
        },
    });

    return { form, postMessageMutation };
}
