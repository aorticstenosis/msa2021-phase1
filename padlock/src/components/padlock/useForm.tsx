import React from "react"
import { PadlockProps } from "./padlockProps"

export const useForm = (callback:any, initialState: PadlockProps) => {
    const [values, setValues] = React.useState(initialState);

    /**
     * It retrives the values of the padlock
     * @param event the value of the padlock
     */
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    /* end of onChange */
    

    /**
     * It submits the values of the padlock and checks for correctness.
     * @param event the unlock button submission
     */
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        callback()
    };
    /* end of onSubmit */
    
    
    return {
        onChange,
        onSubmit,
        values,
    };
}

