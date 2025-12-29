import { AnyFieldApi } from "@tanstack/form-core";

export function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
        <p className="text-destructive text-sm">
            {field.state.meta.isTouched && !field.state.meta.isValid
                ? field.state.meta.errors.map((err) => (
                      <em role="alert" key={err.message}>
                          {err.message}
                      </em>
                  ))
                : null}
        </p>
    );
}
