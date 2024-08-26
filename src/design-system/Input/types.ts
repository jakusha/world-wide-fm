import { Control } from "react-hook-form"

export interface BaseInput {
    control?: Control<any>;
    name?: string;
    label?: string;
    errorText?: string;
}