export interface Patient {
    name: string;
    surname: string;
    pesel: string;
    city: string;
    postalCode: string;
    street: string;
    homeNumber: string;
    projects: string;
    research: string;
    consent: boolean
  }

  export interface Project {
    id: string;
    name: string;
    patients: string;
    research: string;
  }

  export interface Research {
    id: string;
    type: string;
    status: string;
    result: string;
    patient: string;
    project: string;
  }