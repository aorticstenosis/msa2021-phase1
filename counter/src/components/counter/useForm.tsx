import React from "react"
import { CounterProps } from "./padlockProps"

export const useForm = (callback:any, initialState: CounterProps) => {
    const [values, setValues] = React.useState(initialState);

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values)
    };

    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        callback()
    };
    return {
        onChange,
        onSubmit,
        values,
    };
}

