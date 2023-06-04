import React, { useState } from "react";

export const GlobalContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
  const [demographicInformation, setDemographicInformation] = useState({
    checkedEthnicityItems: [],
    radioSexItem: "",
    radioPreferPronounItem: "",
    maritalStatusItems: "",
    fullName: "",
    birth: "",
    email: "",
    phoneNumber: "",
    pregnant: null,
  });

  const [employmentInjuryPhysical, setEmploymentInjuryPhysical] = useState({
    currentEmployerName: "",
    businessNature: "",
    jobBeganDate: "",
    jobLastDate: "",
    employmentDuty: "",
    startedJobTitle: "",
    currentTitle: "",
    typicalWorkSchedule: "",
    salary: "",
    hourlyRate: "",
    overtimeRate: "",
    likeJob: "",
    notLikeJob: "",
    radioPhysicalConditionBeforeInjuryItem: "",
    radioMentalConditionBeforeInjuryItem: "",
    radioEmotionalSymptomsBeforeInjuryItem: "",
    describeMedicalCondition: "",
    injuryDate: "",
    describeInjuryOccurred: "",
    radioMedicationsBeforeInjuryItem: "",
    radioMedicationsNameBeforeInjuryItem: "",
    radioDisabilityConnectionClaimItem: "",
    currentDisability: "",
    radioContinuedWorkingItem: "",
    radioCurrentlyWorkingItem: "",
    radioConflictsItem: "",
    conflictsCount: "",
    eachConflicts: "",
    conflictsRate: "",
    relationShipLikeManagement: "",
    immediateSupervisorName: "",
    relationshipImmediateSupervisor: "",
    explainSuperVisorReason: "",
    performanceAppraisals: "",
    explainPerformanceAppraisals: "",
    relationshipCoWorkers: "",
    explainRelationshipCoWorkers: "",
    verbalWarning: "",
    verbalWarningDateReason: "",
    lastStraw: "",
    explainLastStraw: "",
  });

  const [currentEmployer, setCurrentEmployer] = useState({
    currentlyWorkEmployerInjury: "",
    currentlyWorkEmployerName: "",
    currentlyWorkNatureBusiness: "",
    currentlyWorkJobTitle: "",
    currentlyWorkJobDuties: "",
    currentlyWorkJobBeganDate: "",
    currentlyWorkSchedule: "",
    currentlyWorkSalary: "",
    currentlyWorkLikeThisJob: "",
  });

  const [physicalInjury, setPhysicalInjury] = useState({
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

  const [chiefComplaint, setChiefComplaint] = useState({
    mostBothered: "",
    currentlyExperiencingSymptom: "",
    currentEpisodeDate: "",
    specificStressfulSymptom: "",
    specificStressfulEvent: "",
    stressFollowing: [],
  });

  const [longitudinalHistory, setLongitudinalHistory] = useState({
    emotionEpisodeBegan: "",
    emotionSymptom: "",
    mostWorstSymptom: "",
    emotionalSymptomBecome: "",
    feelEmotion: "",
    explainFeelEmotion: "",
    depressiveSymptom: "0",
    anxietySymptom: "0",
    postTraumaSymptom: "0",
    compareEmotionalSymptom: "",
    symptomsAffectedJob: "",
    describeSymptomsAffectedJob: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        demographicInformation,
        setDemographicInformation,
        employmentInjuryPhysical,
        setEmploymentInjuryPhysical,
        currentEmployer,
        setCurrentEmployer,
        physicalInjury,
        setPhysicalInjury,
        chiefComplaint,
        setChiefComplaint,
        longitudinalHistory,
        setLongitudinalHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
