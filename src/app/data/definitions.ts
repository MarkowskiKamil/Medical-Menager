export interface Project {
  id: number;
  name: string;
  research: Array<Research>;
}

export interface Research {
  id: number;
  type: string;
  status: string;
  result: string;
  patient: Patient;
}

export interface Patient {
  name: string;
  surname: string;
  pesel: string;
  city: string;
  postalCode: string;
  street: string;
  homeNumber: string;
  consent: boolean;
}
