import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) i; 
            return i+1;
            
        })
    }
    function submit(){
        console.log("submitted data");
    }
    function back() {
        setCurrentStepIndex(i=>{
            if(i<=0) return i
            return i-1;
        })
    }

    function goTo(index: number) {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        currentStep: steps[currentStepIndex],
        steps,
        goTo,
        next,
        back,
        submit,
        isFirstStep: currentStepIndex===0,
        isLastStep: currentStepIndex === steps.length -1
    }

}