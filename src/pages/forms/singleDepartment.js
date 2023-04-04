import React, { useState } from "react";
import { Button, Stepper, Step, StepLabel } from "@mui/material";

// Forms
import Form_1 from "@/components/forms/1.1.3";
import Form_2 from "@/components/forms/3.2.2";
import Form_3 from "@/components/forms/3.3.2";
import Form_4 from "@/components/forms/3.3.3";
import Form_5 from "@/components/forms/3.4.3";
import Form_6 from "@/components/forms/5.1.3";
import Form_7 from "@/components/forms/5.1.4";
import Form_8 from "@/components/forms/6.3.2";
import Form_9 from "@/components/forms/6.3.3";
import Form_10 from "@/components/forms/6.3.4";

const steps = [
  "1.1.3",
  "3.2.2",
  "3.3.2",
  "3.3.3",
  "3.4.3 & 3.4.4",
  "5.1.3",
  "5.1.4",
  "6.3.2",
  "6.3.3",
  "6.3.4",
];

function SignleDepartment() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    form_1_1_3: [],
    fomr_3_2_2: [],
    form_3_3_2: [],
    form_3_3_3: [],
    form_3_4_3: [],
    form_5_1_3: [],
    form_5_1_4: [],
    form_6_3_2: [],
    form_6_3_3: [],
    form_6_3_4: [],
  });

  const props = {
    formData,
    setFormData,
  };

  return (
    <div className="">
      <div className="p-8 py-5 flex justify-between items-center bg-titleBg text-white">
        <h1 className="text-2xl font-bold">Single Department</h1>
      </div>
      <div className="m-8">
        <Stepper activeStep={step} alternativeLabel className="my-5 mt-7">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* Forms */}
        <div>
          {step === 0 && <Form_1 {...props} />}
          {step === 1 && <Form_2 {...props} />}
          {step === 2 && <Form_3 {...props} />}
          {step === 3 && <Form_4 {...props} />}
          {step === 4 && <Form_5 {...props} />}
          {step === 5 && <Form_6 {...props} />}
          {step === 6 && <Form_7 {...props} />}
          {step === 7 && <Form_8 {...props} />}
          {step === 8 && <Form_9 {...props} />}
          {step === 9 && <Form_10 {...props} />}
        </div>
        <div className="flex justify-end mt-5">
          <Button
            variant="contained"
            color="info"
            className="mr-4"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => setStep(step + 1)}
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignleDepartment;
