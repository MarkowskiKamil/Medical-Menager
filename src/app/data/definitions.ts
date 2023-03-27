export interface Patient {
    name: string;
    surname: string;
    pesel: string;
    city: string;
    postalCode: string;
    street: string;
    homeNumber: string;
    consent: boolean
  }

  export interface Project {
    id: string;
    name: string;
    patients: Array<Patient>;
    research: Array<Research>;
  }

  export interface Research {
    id: string;
    type: string;
    status: string;
    result: string;
    patient: string;
    project: string;
  }