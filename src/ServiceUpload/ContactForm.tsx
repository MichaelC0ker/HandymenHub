import React from "react"
import { FormWrapper } from "./formWrapper"

type ContactFormData = {
    telephoneNumber: string,
    email: string,
}

type ContactFormProps = ContactFormData & {
    updateFields: (fields: Partial<ContactFormData>) => void
}

export function ContactForm({ telephoneNumber, email,updateFields }: ContactFormProps) {
    return (
        <>
            <FormWrapper title="Contact Details">
            <label>Telephone Number</label>
                <input autoFocus required type="text" value={telephoneNumber} onChange={e => updateFields({telephoneNumber: e.target.value})}/>
                <label>Email</label>
                <input required type="text" value={email}  onChange={e => updateFields({email: e.target.value})}/>
            </FormWrapper>

        </>
    )
}