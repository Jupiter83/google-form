import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

import CardField from "../common/CardField";
import TextFollowUp from "../common/TextFollowUp";
import validateFamilyHistory from "../../validation/validateFamilyHistory";
import useGlobalContext from "../../hooks/useGlobalContext";

const FamilyHistory = ({ currentSection, setCurrentSection }) => {
  const { globalFamilyHistory, setGlobalFamilyHistory } = useGlobalContext();

  const [familyHistoryValue, setFamilyHistoryValue] = useState({
    familyPsychiatricConditions: "",
    psychiatricConditionsList: "",
    psychiatricConditionsTreatment: [],
    familyAttemptedSuicide: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFamilyHistoryValue(globalFamilyHistory);
  }, [globalFamilyHistory]);

  const FamilyPsychiatricConditionsOptions = [
    {
      label: "Depression",
      value: "Depression",
      name: "FamilyPsychiatricConditionsOptionsDepression",
    },
    {
      label: "Anxiety",
      value: "Anxiety",
      name: "FamilyPsychiatricConditionsOptionsAnxiety",
    },
    {
      label: "Bipolar Disorder",
      value: "Bipolar Disorder",
      name: "FamilyPsychiatricConditionsOptionsBipolar Disorder",
    },
    {
      label: "Psychotic Disorder",
      value: "Psychotic Disorder",
      name: "FamilyPsychiatricConditionsOptionsPsychotic Disorder",
    },
    {
      label: "PTSD",
      value: "PTSD",
      name: "FamilyPsychiatricConditionsOptionsPTSD",
    },
    {
      label: "OCD",
      value: "OCD",
      name: "FamilyPsychiatricConditionsOptionsOCD",
    },
    {
      label: "Other",
      value: "Other",
      name: "FamilyPsychiatricConditionsOptionsOther",
    },
  ];

  const PsychiatricConditionsTreatmentOptions = [
    {
      label: "Medication",
      value: "Medication",
      name: "PsychiatricConditionsTreatmentOptionsMedication",
    },
    {
      label: "Therapy",
      value: "Therapy",
      name: "PsychiatricConditionsTreatmentOptionsTherapy",
    },
    {
      label: "Psychiatric Hospitalization",
      value: "Psychiatric Hospitalization",
      name: "PsychiatricConditionsTreatmentOptionsPsychiatric Hospitalization",
    },
    {
      label: "None of the above",
      value: "None of the above",
      name: "PsychiatricConditionsTreatmentOptionsNone of the above",
    },
  ];

  const FamilyAttemptedSuicideOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "FamilyAttemptedSuicideOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "FamilyAttemptedSuicideOptionsNo",
    },
  ];

  const handlePsychiatricConditionsTreatmentchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [
      ...familyHistoryValue.psychiatricConditionsTreatment,
    ];

    if (isChecked) {
      if (itemValue === "None of the above") {
        newCheckedItems = ["None of the above"];
      } else {
        if (
          newCheckedItems.filter((item) => item === "None of the above")
            .length > 0
        ) {
          newCheckedItems = [];
        }
        newCheckedItems.push(itemValue);
      }
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    setFamilyHistoryValue({
      ...familyHistoryValue,
      psychiatricConditionsTreatment: newCheckedItems,
    });
  };

  const handleFamilyPsychiatricConditionschange = (event) => {
    setFamilyHistoryValue({
      ...familyHistoryValue,
      familyPsychiatricConditions: event.target.value,
      psychiatricConditionsList: "",
      psychiatricConditionsTreatment: [],
    });
  };

  const handleFamilyAttemptedSuicidechange = (event) => {
    setFamilyHistoryValue({
      ...familyHistoryValue,
      familyAttemptedSuicide: event.target.value,
    });
  };

  const handleChange = (event) => {
    setFamilyHistoryValue({
      ...familyHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalFamilyHistory(familyHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateFamilyHistory(familyHistoryValue);
    setErrors(errors);

    // if (isValid) {
    //   setGlobalFamilyHistory(familyHistoryValue);
    //   setCurrentSection(currentSection + 1);
    // }
    setCurrentSection(currentSection + 1);
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Family History
      </p>

      <form>
        <CardField
          title="Do any of your family members suffer from the following psychiatric conditions?"
          type="radio"
          options={FamilyPsychiatricConditionsOptions}
          onChange={handleFamilyPsychiatricConditionschange}
          checked={familyHistoryValue?.familyPsychiatricConditions}
          errors={errors.familyPsychiatricConditions}
        />

        {familyHistoryValue?.familyPsychiatricConditions === "Other" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list any other psychiatric conditions your family members have been diagnosed with."
                onChange={handleChange}
                name="psychiatricConditionsList"
                value={familyHistoryValue?.psychiatricConditionsList}
                error={errors.psychiatricConditionsList}
              />
            </div>
            <CardField
              title="If there is a family history of psychiatric conditions, please provide their treatment received, if known."
              type="checkbox"
              options={PsychiatricConditionsTreatmentOptions}
              onChange={handlePsychiatricConditionsTreatmentchange}
              checked={familyHistoryValue?.psychiatricConditionsTreatment}
              errors={errors.psychiatricConditionsTreatment}
            />
          </div>
        ) : null}

        <CardField
          title="Have any of your family members attempted or committed suicide?"
          type="radio"
          options={FamilyAttemptedSuicideOptions}
          onChange={handleFamilyAttemptedSuicidechange}
          checked={familyHistoryValue?.familyAttemptedSuicide}
          errors={errors.familyAttemptedSuicide}
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

export default FamilyHistory;
