import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../state';
import { Button, Icon } from 'semantic-ui-react';
import { apiBaseUrl } from '../constants';
import { getAllPatientInfo } from '../state';
import { Container }  from 'semantic-ui-react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';
//import ListGroup from 'react-boostrap/ListGroup';
import AddDiagnosisModal from '../AddDiagnosisModal';
import { DiagnosisFormValues } from '../AddDiagnosisModal/AddDiagnosisForm';
import { Entry } from '../types';
//import Patient from '../types'

const PatientInfo: React.FC =  () => {

    const [ {patients, diagnoses} , dispatch] = useStateValue();
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const openModal = (): void => setModalOpen(true);
    const closeModal = (): void => setModalOpen(false);
    const [error, setError] = React.useState<string | undefined>();

    const { id } = useParams<{ id: string }>();
    //const [patientWithAllInfo, setPatientWithAllInfo] = useState();
    const patient = patients[id];
    //console.log(patients);
    //console.log(patient);
    //console.log('diagnoses');
    //console.log(diagnoses);

   const fetchPatientWithAllInfo = async () => {
    //console.log('fetch');
    const {data: patientAllInfo} = await axios.get(`${apiBaseUrl}/patients/${id}`);
    dispatch(getAllPatientInfo(patientAllInfo));
};
     if(patient){
    if(!patient.ssn) {
         fetchPatientWithAllInfo();
    }
}

    //console.log(patients);


    const submitNewDiagnosis = async (values: DiagnosisFormValues) => {
        try {
          const { data: newDiagnosis } = await axios.post<Entry>(
            `${apiBaseUrl}/patients/${id}/entries`,
            values
          );
          const patientNewEntryincl = {
              ...patient,
              entries: [...patient.entries, newDiagnosis]
          };
          dispatch( { type: "ADD ENTRY", payload: patientNewEntryincl});
          //dispatch({ type: "SET_DIAGNOSES", payload: newDiagnosis });
          closeModal();
        } catch (e) {
          console.error(e.response.data);
          setError(e.response.data.error);
        }
      };
  
        /*
        if(patient){
        setPatientWithAllInfo(patient);
        }
        */
        //return patient;
        
         

    //if(!patient.ssn) {

        // fetchAllPatientInfo();
        //dispatch(getAllPatientInfo(patientWithAllInfo));

        //console.log(patientWithAllInfo);
        //if(patientWithAllInfo){
        //patient.ssn = patientWithAllInfo.ssn;
    //}
    /*
    React.useEffect( () => {
        fetchAllPatientInfo();
        console.log(patients);
        }, [dispatch]);
    */

    
    if(patient){

        if(patient.entries) {

    if(patient.gender === 'male') {

    

    return (
        <div>
            <h1>{patient.name}<Icon name='mars'></Icon></h1>
            <p>ssn: {patient.ssn}</p>
            <p>occupation: {patient.occupation}</p>
            <Container textAlign = "center" >
                <h2>Entries</h2>
                </Container>
            <Table striped celled>
                <Table.Body>
                    {patient.entries.map(e => 
                        <Table.Row key={patient.id}>
                            <Table.Cell>
                            <p>Entry type: {e.type}</p>
                            <p>{e.date}</p>
                            <p> {e.description}</p>
                    <ul>
                        {e.diagnosisCodes?.map(dc => 
                            <li>{dc} {diagnoses[dc].name}</li>
                        )}
                    </ul>
                            </Table.Cell>
                        </Table.Row>
                        )}
                </Table.Body>
            </Table>
            <AddDiagnosisModal
            modalOpen={modalOpen}
            onSubmit={submitNewDiagnosis}
            error={error}
            onClose={closeModal}
            />
            <Button onClick={() => openModal()}>
                Add New Diagnosis
            </Button>
            
        </div>
    );
    
    }


    if(patient.gender === 'female') {
        return (
            <div>
                <h1>{patient.name}<Icon name='venus'></Icon></h1>
                <p>ssn: {patient.ssn}</p>
                <p>occupation: {patient.occupation}</p>
                <Container textAlign = "center" ><h2>Entries</h2>
                <Table striped celled>
                    <Table.Body>
                        {patient.entries.map(e => 
                            <Table.Row key={patient.id}>
                                <Table.Cell>
                                <p>{e.date} {e.description}</p>
                        <ul>
                            {e.diagnosisCodes?.map(dc => 
                                <li>{dc} {diagnoses[dc].name}</li>
                            )}
                        </ul>
                                </Table.Cell>
                            </Table.Row>
                            )}
                    </Table.Body>
                </Table>
                </Container>
                <AddDiagnosisModal
                modalOpen={modalOpen}
                onSubmit={submitNewDiagnosis}
                onClose={closeModal}
                error={error}
                />
                <Button onClick={() => openModal()}>Add new Diagnosis</Button>
                
            </div>
        );

        }

    if(patient.name === 'other') {
        return (
            <div>
                <h1>{patient.name}<Icon name='transgender alternate'></Icon></h1>
                <p>ssn: {patient.ssn}</p>
                <p>occupation: {patient.occupation}</p>
                <Container textAlign = "center" ><h2>Entries</h2>
                <Table striped celled>
                    <Table.Body>
                        {patient.entries.map(e => 
                            <Table.Row key={patient.id}>
                                <Table.Cell>
                                <p>{e.date} {e.description}</p>
                        <ul>
                            {e.diagnosisCodes?.map(dc => 
                                <li>{dc} {diagnoses[dc].name}</li>
                            )}
                        </ul>
                                </Table.Cell>
                            </Table.Row>
                            )}
                    </Table.Body>
                </Table>
                </Container>
            </div>
        );

    }
}

    }

    return null;
    
       
};

export default PatientInfo;