import React from "react"
import { FormWrapper } from "./formWrapper"

type AdditionalFormData = {
    tag: string,
    picture: string,
}

type AdditionalFormProps = AdditionalFormData & {
    updateFields: (fields: Partial<AdditionalFormData>) => void
}

export function AdditionalForm({ tag, picture,updateFields }: AdditionalFormProps) {
    return (
        <>
               <FormWrapper title="Additional Information">
               <label>Tag</label>
                <input autoFocus required type="text" value={tag} onChange={e => updateFields({tag: e.target.value})}/>
                <label>Picture</label>
                <input  type="file" accept = "image/jpeg, image/png, image/jpg" value={picture}  onChange={e => updateFields({picture: e.target.value})}/>
            </FormWrapper>

        </>
    )
}