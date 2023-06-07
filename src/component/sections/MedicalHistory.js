import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import TextFollowUp from "../common/TextFollowUp";
import validateMedicalHistory from "../../validation/validateMedicalHistory";

const MedicalHistory = ({ currentSection, setCurrentSection }) => {
  const {
    demographicInformation,
    globalMedicalHistory,
    setGlobalMedicalHistory,
  } = useGlobalContext();

  const [medicalHistoryValue, setMedicalHistoryValue] = useState({
    diagnosedHealthcareProvider: [],
    otherMedicalCondition: "",
    pregnantPlanning: "",
    plannedPregnancyProvider: "",
    physicalHealthMedicationsLists: "",
    surgeries: "",
    surgeriesDateList: "",
    medicationsSideEffect: "",
    futureMedicalPlan: "",
    futureMedicalPlanList: "",
    currentPrimarycarePractitioner: "",
    pastprimarycarePractitioner: "",
    periodReceiveProvider: "",
    hospitalListEverBeen: "",
    medicationsListTaking: "",
    allergiesMedication: "",
    allergiesList: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setMedicalHistoryValue(globalMedicalHistory);
  }, [globalMedicalHistory]);

  const DiagnosedHealthcareProviderOptions = [
    {
      label: "Arthritis",
      value: "Arthritis",
      name: "DiagnosedHealthcareProviderOptionsArthritis",
    },
    {
      label: "Asthma",
      value: "Asthma",
      name: "DiagnosedHealthcareProviderOptionsAsthma",
    },
    {
      label: "Back problems",
      value: "Back problems",
      name: "DiagnosedHealthcareProviderOptionsBack problems",
    },
    {
      label: "Chronic pain",
      value: "Chronic pain",
      name: "DiagnosedHealthcareProviderOptionsChronic pain",
    },
    {
      label: "Diabetes",
      value: "Diabetes",
      name: "DiagnosedHealthcareProviderOptionsDiabetes",
    },
    {
      label: "Heart Disease",
      value: "Heart Disease",
      name: "DiagnosedHealthcareProviderOptionsHeart Disease",
    },
    {
      label: "Hypertension",
      value: "Hypertension",
      name: "DiagnosedHealthcareProviderOptionsHypertension",
    },
    {
      label: "Gastrointestinal problems",
      value: "Gastrointestinal problems",
      name: "DiagnosedHealthcareProviderOptionsGastrointestinal problems",
    },
    {
      label: "Migraines",
      value: "Migraines",
      name: "DiagnosedHealthcareProviderOptionsMigraines",
    },
    {
      label: "Thyroid problems",
      value: "Thyroid problems",
      name: "DiagnosedHealthcareProviderOptionsThyroid problems",
    },
    {
      label: "Other",
      value: "Other",
      name: "DiagnosedHealthcareProviderOptionsOther",
    },
  ];

  const PregnantPlanningOptions = [
    { label: "Yes", value: "Yes", name: "PregnantPlanningOptionsYes" },
    { label: "No", value: "No", name: "PregnantPlanningOptionsNo" },
    {
      label: "I don't know/I'm not sure",
      value: "I don't know/I'm not sure",
      name: "PregnantPlanningOptionsI don't know/I'm not sure",
    },
  ];

  const PlannedPregnancyProviderOptions = [
    { label: "Yes", value: "Yes", name: "PlannedPregnancyProviderOptionsYes" },
    { label: "No", value: "No", name: "PlannedPregnancyProviderOptionsNo" },
    {
      label: "I don't know/I'm not sure",
      value: "I don't know/I'm not sure",
      name: "PlannedPregnancyProviderOptionsI don't know/I'm not sure",
    },
  ];

  const SurgeriesOptions = [
    { label: "Yes", value: "Yes", name: "SurgeriesOptionsYes" },
    { label: "No", value: "No", name: "SurgeriesOptionsNo" },
  ];

  const FutureMedicalPlanOptions = [
    { label: "Yes", value: "Yes", name: "FutureMedicalPlanOptionsYes" },
    { label: "No", value: "No", name: "FutureMedicalPlanOptionsNo" },
  ];

  const AllergiesMedicationOptions = [
    { label: "Yes", value: "Yes", name: "AllergiesMedicationOptionsYes" },
    { label: "No", value: "No", name: "AllergiesMedicationOptionsNo" },
  ];

  const handleDiagnosedHealthcareProviderchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...medicalHistoryValue?.diagnosedHealthcareProvider];

    let length = medicalHistoryValue.diagnosedHealthcareProvider.length;

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      length = length - 1;
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    if (length === 0) {
      setMedicalHistoryValue({
        ...medicalHistoryValue,
        diagnosedHealthcareProvider: newCheckedItems,
        otherMedicalCondition: "",
      });
    } else {
      if (isChecked === false && itemValue === "Other") {
        setMedicalHistoryValue({
          ...medicalHistoryValue,
          diagnosedHealthcareProvider: newCheckedItems,
          otherMedicalCondition: "",
        });
      } else {
        setMedicalHistoryValue({
          ...medicalHistoryValue,
          diagnosedHealthcareProvider: newCheckedItems,
        });
      }
    }
  };

  const handlePregnantPlanningchange = (event) => {
    setMedicalHistoryValue({
      ...medicalHistoryValue,
      pregnantPlanning: event.target.value,
      plannedPregnancyProvider: "",
    });
  };

  const handlePlannedPregnancyProviderChange = (event) => {
    setMedicalHistoryValue({
      ...medicalHistoryValue,
      plannedPregnancyProvider: event.target.value,
    });
  };

  const handleSurgerieschange = (event) => {
    setMedicalHistoryValue({
      ...medicalHistoryValue,
      surgeries: event.target.value,
      surgeriesDateList: "",
    });
  };

  const handleFutureMedicalPlanchange = (event) => {
    setMedicalHistoryValue({
      ...medicalHistoryValue,
      futureMedicalPlan: event.target.value,
      futureMedicalPlanList: "",
    });
  };

  const handleAllergiesMedicationchange = (event) => {
    setMedicalHistoryValue({
      ...medicalHistoryValue,
      allergiesMedication: event.target.value,
      allergiesList: "",
    });
  };

  const handleChange = (event) => {
    setMedicalHistoryValue({
      ...medicalHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalMedicalHistory(medicalHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateMedicalHistory(
      medicalHistoryValue,
      demographicInformation
    );
    setErrors(errors);

    // if (isValid) {
    //   setGlobalMedicalHistory(medicalHistoryValue);
    //   setCurrentSection(currentSection + 1);
    // }
    setCurrentSection(currentSection + 1);
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Medical History
      </p>

      <form>
        <CardField
          title="Have you ever experienced having so much energy that you do not need to sleep for several days or a week at a time?"
          type="checkbox"
          options={DiagnosedHealthcareProviderOptions}
          onChange={handleDiagnosedHealthcareProviderchange}
          checked={medicalHistoryValue?.diagnosedHealthcareProvider}
          errors={errors.diagnosedHealthcareProvider}
        />

        {medicalHistoryValue?.diagnosedHealthcareProvider?.filter(
          (item) => item === "Other"
        ).length > 0 ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please enter your other medical conditions here."
                onChange={handleChange}
                name="otherMedicalCondition"
                value={medicalHistoryValue?.otherMedicalCondition}
                error={errors.otherMedicalCondition}
              />
            </div>
          </div>
        ) : null}

        {demographicInformation?.radioSexItem === "Female" ? (
          <div>
            <CardField
              title="Are you pregnant, planning on getting pregnant, or breastfeeding?"
              type="checkbox"
              options={PregnantPlanningOptions}
              onChange={handlePregnantPlanningchange}
              checked={medicalHistoryValue?.pregnantPlanning}
              errors={errors.pregnantPlanning}
            />

            {medicalHistoryValue?.pregnantPlanning === "Yes" ? (
              <div>
                <div className="w-[68%] mx-auto mt-3">
                  <RadioFollowUp
                    title="Are you currently engaged with a healthcare provider regarding your current or planned pregnancy?"
                    onChange={handlePlannedPregnancyProviderChange}
                    options={PlannedPregnancyProviderOptions}
                    checked={medicalHistoryValue?.plannedPregnancyProvider}
                    error={errors.plannedPregnancyProvider}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        <TextField
          title="Please list your general physical health medications, including your dosage for each medication:"
          type="text"
          name="physicalHealthMedicationsLists"
          value={medicalHistoryValue?.physicalHealthMedicationsLists}
          placeholder="Your answer"
          onChange={handleChange}
          error={errors.physicalHealthMedicationsLists}
        />

        <CardField
          title="Have you ever had any surgeries?"
          type="radio"
          options={SurgeriesOptions}
          onChange={handleSurgerieschange}
          checked={medicalHistoryValue?.surgeries}
          errors={errors.surgeries}
        />

        {medicalHistoryValue?.surgeries === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list your previous surgeries with dates when possible."
                onChange={handleChange}
                name="surgeriesDateList"
                value={medicalHistoryValue?.surgeriesDateList}
                error={errors.surgeriesDateList}
              />
            </div>
          </div>
        ) : null}

        <TextField
          title="Have your general medical medications produced any side effects?"
          type="text"
          name="medicationsSideEffect"
          value={medicalHistoryValue?.medicationsSideEffect}
          placeholder="Your answer"
          onChange={handleChange}
          error={errors.medicationsSideEffect}
        />

        <CardField
          title="Do your treatment providers have plans for your future medical care?"
          type="radio"
          options={FutureMedicalPlanOptions}
          onChange={handleFutureMedicalPlanchange}
          checked={medicalHistoryValue?.futureMedicalPlan}
          errors={errors.futureMedicalPlan}
        />

        {medicalHistoryValue?.futureMedicalPlan === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list your planned planned future medical care"
                onChange={handleChange}
                name="futureMedicalPlanList"
                value={medicalHistoryValue?.futureMedicalPlanList}
                error={errors.futureMedicalPlanList}
              />
            </div>
          </div>
        ) : null}

        <TextField
          title="Current primary care physician or nurse practitioner is (Name, Facility, City):"
          type="text"
          name="currentPrimarycarePractitioner"
          value={medicalHistoryValue?.currentPrimarycarePractitioner}
          placeholder="Your answer"
          onChange={handleChange}
          error={errors.currentPrimarycarePractitioner}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              Past primary care physician or nurse practitioners (Name,
              Facility, City)?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="form-group">
              <input
                type="text"
                className={classnames(
                  "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                  { "border-b-red-500": errors.pastprimarycarePractitioner }
                )}
                placeholder="Your answer"
                name="pastprimarycarePractitioner"
                value={medicalHistoryValue.pastprimarycarePractitioner}
                onChange={handleChange}
              />
              {errors.pastprimarycarePractitioner && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.pastprimarycarePractitioner}
                </div>
              )}

              <div className="w-[95%] mx-auto p-3  shadow-lg ">
                <p className="text-left text-[20px] mt-2">
                  During what time period did you receive this care from each
                  provider?
                </p>
                <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                <div className="mt-5 p-2">
                  <input
                    type="text"
                    className={classnames(
                      "mt-2 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                      { "border-b-red-500": errors.periodReceiveProvider }
                    )}
                    name="periodReceiveProvider"
                    value={medicalHistoryValue.periodReceiveProvider}
                    onChange={handleChange}
                    placeholder="Your answer"
                  />
                </div>

                {errors.periodReceiveProvider && (
                  <div className="text-red-500 text-left text-[12px] mt-2">
                    {errors.periodReceiveProvider}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <TextField
          title="List All of the Hospitals You Have Ever Been In For Medical Reasons (and when you were in this hospital):"
          type="text"
          name="hospitalListEverBeen"
          value={medicalHistoryValue?.hospitalListEverBeen}
          placeholder="Your answer"
          onChange={handleChange}
          error={errors.hospitalListEverBeen}
        />

        <TextField
          title="List All Of The Medications You Are Taking (Name of medication, dosage):"
          type="text"
          name="medicationsListTaking"
          value={medicalHistoryValue?.medicationsListTaking}
          placeholder="Your answer"
          onChange={handleChange}
          error={errors.medicationsListTaking}
        />

        <CardField
          title="Do you have any allergies or intolerances to medication or food?"
          type="radio"
          options={AllergiesMedicationOptions}
          onChange={handleAllergiesMedicationchange}
          checked={medicalHistoryValue?.allergiesMedication}
          errors={errors.allergiesMedication}
        />

        {medicalHistoryValue?.allergiesMedication === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list your intolerances or allergies."
                onChange={handleChange}
                name="allergiesList"
                value={medicalHistoryValue?.allergiesList}
                error={errors.allergiesList}
              />
            </div>
          </div>
        ) : null}

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

export default MedicalHistory;