import React from "react"
import { FormWrapper } from "./formWrapper"

type serviceData = {
    serviceName: string,
    serviceDescription: string,
    operatingHours: string
}

type serviceProps = serviceData & {
    updateFields: (fields: Partial<serviceData>) => void
}


export function ServiceDetailForm({serviceName,serviceDescription,operatingHours,updateFields}: serviceProps) {
    return (
        <>
            <FormWrapper title="Service Details">
                <label>Service Name</label>
                <input autoFocus required type="text" value={serviceName} onChange={e => updateFields({serviceName: e.target.value})}/>
                <label>Service Description</label>
                <input required type="text" value={serviceDescription}  onChange={e => updateFields({serviceDescription: e.target.value})}/>
                <label>Operating hours</label>
                <input required  type="text" value={operatingHours}  onChange={e => updateFields({operatingHours: e.target.value})}/>
            </FormWrapper>

        </>
    )
}