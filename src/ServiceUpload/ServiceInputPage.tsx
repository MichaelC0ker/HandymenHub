import { FormEvent, useState } from "react"
import { AdditionalForm } from "./AdditionalForm"
import { ContactForm } from "./ContactForm"
import { ServiceDetailForm } from "./ServiceDetailForm";
import { useMultiStepForm } from "./useMultiStepForm"
import React from "react";
import './ServiceInputPageStyling.css';

type FormData = {
  serviceName: string,
  serviceDescription: string,
  operatingHours: string,
  telephoneNumber: string,
  email: string,
  tag: string,
  picture: string,
}

const INITIAL_DATA: FormData = {
  serviceName: "",
  serviceDescription: "",
  operatingHours: "",
  telephoneNumber: "",
  email: "",
  tag: "",
  picture: ""
}

function ServiceInput() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  
  const { steps, currentStepIndex, currentStep, isFirstStep, back, next, isLastStep, submit } =
    useMultiStepForm([<ServiceDetailForm {...data} updateFields={updateFields} />,<AdditionalForm {...data} updateFields={updateFields} />,<ContactForm {...data} updateFields={updateFields} />]);

 

  function onSubmit(e: FormEvent) {
    e.preventDefault(); //prevent page from refreshing
    next(); //could add validation here 
  }

  return (
    <div
      id="service-form">
      <form onSubmit={onSubmit}>
        <div id="form-lable">{currentStepIndex + 1}/{steps.length}</div>
        {currentStep}
        <div id="button-container">
          {!isFirstStep && <button onClick={back} type="button">Back</button>}
          {!isLastStep && <button type="submit">Next</button>}
          {isLastStep && <button onClick={submit} type="button">Submit</button>}

        </div>
      </form>
    </div>
  )
}

export default ServiceInput
