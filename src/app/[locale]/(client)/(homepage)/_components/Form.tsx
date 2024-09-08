"use client";

import { useFormState } from "react-dom";
import FormButton from "./Button";
import { addProduct } from "@/actions/actions";

export default function Form() {
    const [state, formAction] = useFormState(addProduct, { message: "" });

    return (
        <form
            action={formAction}
            className="p-2 my-40 border rounded-md flex flex-col gap-2"
        >
            <input
                placeholder="text"
                name="test"
                className="border"
            />
            <p className="text-xl font-bold text-center">{state.message}</p>
            <FormButton />
        </form>
    );
}
