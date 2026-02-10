import { AnyFieldApi } from "@tanstack/form-core";

export function FieldInfo({ field }: { field: AnyFieldApi }) {
    if (field.state.meta.isTouched && !field.state.meta.isValid) {
        return field.state.meta.errors.map((error) => (
            <em role="alert" key={error.message} className="text-destructive">
                {error.message}
            </em>
        ));
    }

    return null;
}
