import { State } from "./state";
import { Diagnosis, Patient } from "../types";

export const setPatientList = (patientList: Patient[]): Action => {

  
  return {
    type: 'SET_PATIENT_LIST',
    payload: patientList
  };

};

export const setDiagnosesList = (diagnosesList: Diagnosis[]): Action => {

  return {
    type: 'SET_DIAGNOSES',
    payload: diagnosesList
  };

};

export const addPatient = (patient: Patient): Action => {

  return {
    type: 'ADD_PATIENT',
    payload: patient
  };
};

export const getAllPatientInfo = (patient: Patient): Action => {

  return {
    type: 'GET_ALL_INFO',
    payload: patient

  };
};



export type Action = 
   | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | { type: 'GET_ALL_INFO';
    payload: Patient;
  }
  | {
    type: "SET_DIAGNOSES";
    payload: Diagnosis[]; 
  }
  | {
    type: "ADD ENTRY";
    payload: Patient;
  }
  ;


export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
      case "GET_ALL_INFO":
        return {
            ...state,
            patients: {
              ...state.patients,
              [action.payload.id]: action.payload
            }
        };
      case "SET_DIAGNOSES":
        return {
          ...state,
        diagnoses: {
          ...action.payload.reduce(
            (memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }),
            {}
          ),
          ...state.diagnoses
        }
          
        };
        case 'ADD ENTRY':
          return {

            
            ...state,
            patients: { [action.payload.id]: action.payload}
          };
    default:
      return state;
  }
};
