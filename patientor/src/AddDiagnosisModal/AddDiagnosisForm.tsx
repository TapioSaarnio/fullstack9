import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Diagnosis } from '../types';
import { DiagnosisSelection, TextField } from '../AddPatientModal/FormField';
import { Button, Grid } from 'semantic-ui-react';
import { useStateValue } from '../state';
export type DiagnosisFormValues = Omit<Diagnosis, "id" | "entries">;

interface Props {
    onSubmit: (values: DiagnosisFormValues) => void;
    onCancel: () => void;
}

const strongStyle = {
    marginBottom: 10
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AddDiagnosisForm: React.FC<Props> = ({ onSubmit, onCancel }) => { 

    const [{ diagnoses }] = useStateValue();
    return (
        <Formik
        initialValues={{
            type: "Hospital",
            description: "",
            date: "",
            specialist: "",
            diagnosisCodes: [],
            code: "",
            name: "",
            latin: "",
            discharge: {
                date: "",
                criteria: ""
            }

        }}
        onSubmit={onSubmit}
        >
        {({ setFieldValue, setFieldTouched }) => {

            return (
                <Form className="form ui">
  
                <Field
                label="Description"
                placeholder="Description"
                name="description"
                component={TextField}
                />
                <Field
                label="date"
                placeholder="date"
                name="date"
                component={TextField}
                />
                <Field
                label="specialist"
                placeholder="specialist"
                name="specialist"
                component={TextField}
                />
                <DiagnosisSelection
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                diagnoses={Object.values(diagnoses)}
                />
                
                <strong style={strongStyle}>
                    Discharge
                </strong>
                <Field
                    label="date"
                    placeholder="dischargeDate"
                    name="discharge.date"
                    component={TextField}
                />
                <Field
                label="criteria"
                placeholder="criteria"
                name="discharge.criteria"
                component={TextField}
                />

                
                <Grid>
                    <Grid.Column floated="left" width={5}>
                        <Button type="button" onClick={onCancel} color="red">
                            Cancel
                        </Button>
                    </Grid.Column>
                    <Button
                    type="submit"
                    floated="right"
                    color="green"
                    //disabled={!dirty || isValid}
                    >
                        Add
                    </Button>
                </Grid>
                </Form>
            );

        }} 
        </Formik>
        
    );

};

export default AddDiagnosisForm;