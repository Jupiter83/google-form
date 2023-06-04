import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import TextField from "../common/TextField";
import useGlobalContext from "../../hooks/useGlobalContext";
import CardField from "../common/CardField";
import validatePhysicalInjury from "../../validation/validatePhysicalInjury";

const PhysicalInjury = ({ currentSection, setCurrentSection }) => {
  const { physicalInjury, setPhysicalInjury } = useGlobalContext();

  const [errors, setErrors] = useState({});

  const [physicalInjuryValue, setPhysicalInjuryValue] = useState({
    firstSymptoms: "",
    firstTreatment: "",
    restYourTreatment: "",
    doctorsList: "",
    receivedSurgery: "",
    surgeryList: "",
    medicationList: "",
    treatmentsHelped: "",
    stillWorking: "",
    leavingReason: "",
  });

  useEffect(() => {
    setPhysicalInjuryValue(physicalInjury);
  }, [physicalInjury]);

  const receivedSurgeryOptions = [
    { label: "Yes", value: "Yes", name: "receivedSurgeryYes" },
    { label: "No", value: "No", name: "receivedSurgeryNo" },
  ];

  const stillWorkingOptions = [
    { label: "Yes", value: "Yes", name: "stillWorkingYes" },
    { label: "No", value: "No", name: "stillWorkingNo" },
  ];

  const handleChange = (event) => {
    setPhysicalInjuryValue({
      ...physicalInjuryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleReceivedSurgeryChange = (event) => {
    setPhysicalInjuryValue({
      ...physicalInjuryValue,
      receivedSurgery: event.target.value,
    });
  };

  const handleStillWorkingChange = (event) => {
    setPhysicalInjuryValue({
      ...physicalInjuryValue,
      stillWorking: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setPhysicalInjury(physicalInjuryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validatePhysicalInjury(physicalInjuryValue);
    setErrors(errors);

    if (isValid) {
      setPhysicalInjury(physicalInjuryValue);
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Physical Injury
      </p>

      <form>
        <TextField
          title="If Your Injury Was Initially Physical, Describe the First Symptoms (Pain) You Experienced:"
          placeholder="Your answer"
          name="firstSymptoms"
          value={physicalInjuryValue.firstSymptoms}
          onChange={handleChange}
          error={errors.firstSymptoms}
        />

        <TextField
          title="If Your Injury Was Initially Physical, Describe the First Treatment You Received Following This Injury(Medical, Chiropractic, Physical Therapy PT, Injections):"
          placeholder="Your answer"
          name="firstTreatment"
          value={physicalInjuryValue.firstTreatment}
          onChange={handleChange}
          error={errors.firstTreatment}
        />

        <TextField
          title="If Your Injury Was Initially Physical, Describe the Rest of Your Treatment (Medical, Chiropractic, PT)"
          placeholder="Your answer"
          name="restYourTreatment"
          value={physicalInjuryValue.restYourTreatment}
          onChange={handleChange}
          error={errors.restYourTreatment}
        />

        <TextField
          title="List the Doctors You Have Seen For This Physical Injury:"
          placeholder="Your answer"
          name="doctorsList"
          value={physicalInjuryValue.doctorsList}
          onChange={handleChange}
          error={errors.doctorsList}
        />

        <CardField
          title="BEFORE The Injury, Were You Being Treated for Any Mental or Emotional Condition(s)?"
          type="radio"
          options={receivedSurgeryOptions}
          onChange={handleReceivedSurgeryChange}
          checked={physicalInjuryValue?.receivedSurgery}
          errors={errors.receivedSurgery}
        />

        <TextField
          title="List the Surgeries You Have Received for This Physical Injury:"
          placeholder="Your answer"
          name="surgeryList"
          value={physicalInjuryValue.surgeryList}
          onChange={handleChange}
          error={errors.surgeryList}
        />

        <TextField
          title="List the Medications You Have Received for This Physical Injury:"
          placeholder="Your answer"
          name="medicationList"
          value={physicalInjuryValue.medicationList}
          onChange={handleChange}
          error={errors.medicationList}
        />

        <TextField
          title="Have Any of the Above Treatments Helped Relieve Your Pain?"
          placeholder="Your answer"
          name="treatmentsHelped"
          value={physicalInjuryValue.treatmentsHelped}
          onChange={handleChange}
          error={errors.treatmentsHelped}
        />

        <CardField
          title="Are You Still Working?"
          type="radio"
          options={stillWorkingOptions}
          onChange={handleStillWorkingChange}
          checked={physicalInjuryValue?.stillWorking}
          errors={errors.stillWorking}
        />

        <TextField
          title="If Not Working, Reason for Leaving?"
          placeholder="Your answer"
          name="leavingReason"
          value={physicalInjuryValue.leavingReason}
          onChange={handleChange}
          error={errors.leavingReason}
        />

        <div className="mx-auto w-[65%] flex justify-between mt-3">
          {currentSection > 0 && (
            <Button variant="contained" onClick={handleBackClick}>
              Back
            </Button>
          )}

          <Button variant="contained" type="button" onClick={handleNextClick}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PhysicalInjury;
