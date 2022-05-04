export = PortalHRRequestsTypes;
export as namespace PortalHRRequestsTypes;

declare namespace PortalHRRequestsTypes {
  export type FirstStep = {
    topManager: string;
    topManagerId: number;
    title: string;
    position: string;
    project: string;
    region: string;
    quantity: string;
    subDivision: string;
    directSupervisor: string;
    functionalSupervisor: string;
    interviewMember: string;
    vacancyOpeningDate: string | null;
    reasonForVacancy: string;
    interviewStepsContent: string;
    testAssignment: string;
    testAssignmentFile?: File | null;
  };

  export type SecondStep = {
    age: string;
    gender: string;
    education: string;
    experience: string;
    jobDescriptionContent: string;
    personalQualitiesContent: string;
  };

  export type ThirdStep = {
    dutiesContent: string;
    requirementsContent: string;
    additionalKnowledgeContent: string;
  };

  export type FourthStep = {
    remoteWork: string;
    schedule: string;
    probationPeriod: string;
    salary: string;
    bonuses: string;
    workplaceSpecialRequirements: string;
  };

  export type FinalModel = FirstStep & SecondStep & ThirdStep & FourthStep;

  export type RequestStatus =
    | "OPEN"
    | "ACCEPTED"
    | "SIGNED"
    | "EXECUTED"
    | "TERMINATED";

  type CreatedHRRequest = {
    requestId?: string;
    dateCreated?: string;
    answerableHR?: string;
    status: RequestStatus;
    accessionDate: string;
    testAssignmentFileNameOnServer?: string;
  };

  export interface HRRequest extends FinalModel, CreatedHRRequest {}
}
