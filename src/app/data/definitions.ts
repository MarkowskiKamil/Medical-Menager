export interface Patient {
    name: string;
    surname: string;
    pesel: string;
    city: string;
    postalCode: string;
    street: string;
    homeNumber: string;
    projects: Project;
    research: Research;
    consent: boolean
  }

  export interface Project {
    id: string;
    name: string;
    patients: Patient;
    research: Research;
  }

  export interface Research {
    id: string;
    type: string;
    status: string;
    result: string;
    patient: Patient;
    project: Project;
  }