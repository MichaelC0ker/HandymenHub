import React from "react"
import { ReactNode } from "react"
import "./formWrapperStyling.css"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <>
            <h2 id="form-heading">{title}</h2>
            <fieldset id="form-elements">{children}</fieldset>
        </>

    )
}